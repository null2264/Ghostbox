import clsx from 'clsx';
import parse, { HTMLReactParserOptions, domToReact, Element as ParserElement } from 'html-react-parser';
import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link as DomLink } from 'react-router-dom';

import { reactText } from 'soapbox/utils/react';
import { onlyEmoji as isOnlyEmoji } from 'soapbox/utils/rich-content';

import { isRtl } from '../rtl';

import Link from './link';
import Markup from './markup';
import Poll from './polls/poll';
import { Button } from './ui';

import type { Sizes } from 'soapbox/components/ui/text/text';
import type { Status } from 'soapbox/types/entities';

const MAX_HEIGHT = 642; // 20px * 32 (+ 2px padding at the top)
const BIG_EMOJI_LIMIT = 10;

export interface IStatusContent {
  status: Status
  onClick?: () => void
  collapsable?: boolean
  translatable?: boolean
  textSize?: Sizes
}

/** Renders the text content of a status */
const StatusContent: React.FC<IStatusContent> = ({
  status,
  onClick,
  collapsable = false,
  textSize = 'md',
}) => {
  const [isCollapsable, setCollapsable] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [onlyEmoji, setOnlyEmoji] = useState(false);

  const node = useRef<HTMLDivElement>(null);

  const toggleCollapsed: React.MouseEventHandler = (e) => {
    e.stopPropagation();

    setCollapsed(!collapsed);
  };

  const maybeSetCollapsed = (): void => {
    if (!node.current) return;

    if (collapsable && !collapsed) {
      if (node.current.clientHeight > MAX_HEIGHT) {
        setCollapsable(true);
        setCollapsed(true);
      }
    }
  };

  const maybeSetOnlyEmoji = (): void => {
    if (!node.current) return;
    const only = isOnlyEmoji(node.current, BIG_EMOJI_LIMIT, true);

    if (only !== onlyEmoji) {
      setOnlyEmoji(only);
    }
  };

  useLayoutEffect(() => {
    maybeSetCollapsed();
  }, []);

  useLayoutEffect(() => {
    maybeSetOnlyEmoji();
  });

  const options: HTMLReactParserOptions = {
    replace: (node) => {
      if (node instanceof ParserElement && ['script', 'iframe'].includes(node.name)) return null;

      if (node instanceof ParserElement && node.name === 'a') {
        const classes = node.attribs.class?.split(' ') || [];

        if (classes.includes('mention')) {
          const mention = status.mentions.find(({ url }) => node.attribs.href === url);
          if (mention)
            return (
              <DomLink to={`/@${mention.acct}`} title={`@${mention.acct}`} className='inline-block rounded-full bg-primary-200 px-2 py-1'>
                @{mention.acct}
              </DomLink>
            );
        }

        if (classes.includes('hashtag') || node.attribs.href.match(/^http(?:s)?:\/\/\S*\/tags/)) {
          let hashtag: string | undefined = node.attribs.dataTag;

          if (!hashtag) {
            const child = domToReact(node.children);
            if (Array.isArray(child)) {
              // Sometime hashtag is '#<span>tag</span>' for some reason, mostly hashtags from Mastodon
              hashtag = child.map(e => reactText(e, ['#'])).join('');
            } else {
              hashtag = typeof child === 'string' ? child.replace('#', '') : undefined;
            }
          }

          if (hashtag)
            return (
              <Link to={`/tags/${hashtag}`}>
                #{hashtag}
              </Link>
            );
        }

        return (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <a
            {...node.attribs}
            onClick={(e) => e.stopPropagation()}
            rel='nofollow noopener'
            target='_blank'
            title={node.attribs.href}
          >
            {domToReact(node.children, options)}
          </a>
        );
      }
    },
  };

  const parsedHtml = useMemo((): string => {
    // TODO: Add greentext back?
    return status.contentHtml;
  }, [status.contentHtml]);

  if (status.content.length === 0) {
    return null;
  }

  const withSpoiler = status.spoiler_text.length > 0;

  const baseClassName = 'text-gray-900 dark:text-gray-100 break-words text-ellipsis overflow-x-visible overflow-y-clip relative focus:outline-none';

  const content = parse(parsedHtml, options);
  const direction = isRtl(status.search_index) ? 'rtl' : 'ltr';
  const className = clsx(baseClassName, {
    'cursor-pointer': onClick,
    'whitespace-normal': withSpoiler,
    'max-h-[300px]': collapsed,
    'leading-normal big-emoji': onlyEmoji,
  });
  const hasPoll = status.poll && typeof status.poll === 'string';

  const output = [
    <Markup
      ref={node}
      tabIndex={0}
      key='content'
      className={className}
      direction={direction}
      lang={status.language || undefined}
      size={textSize}
    >
      {content}
    </Markup>,
  ];

  if (isCollapsable && collapsed) {
    output.push(
      <div className='flex w-full justify-center pt-2' role='button' tabIndex={0} onClick={toggleCollapsed}>
        <Button
          type='button'
          theme='primary'
          size='sm'
          icon={require('@tabler/icons/chevron-down.svg')}
          onClick={toggleCollapsed}
        >
          <FormattedMessage id='status.show_more' defaultMessage='Show more' />
        </Button>
      </div>,
    );
  }

  if (hasPoll && !collapsed) {
    output.push(<Poll id={status.poll} key='poll' status={status.url} />);
  }

  if (isCollapsable && !collapsed) {
    output.push(
      <div className='flex w-full justify-center pt-2' role='button' tabIndex={0} onClick={toggleCollapsed}>
        <Button
          type='button'
          theme='primary'
          size='sm'
          icon={require('@tabler/icons/chevron-up.svg')}
          onClick={toggleCollapsed}
        >
          <FormattedMessage id='status.show_less' defaultMessage='Show less' />
        </Button>
      </div>,
    );
  }

  if (onClick)
    return <div className={clsx({ 'bg-gray-100 dark:bg-primary-800 rounded-md p-4': hasPoll })}>{output}</div>;
  else
    return <>{output}</>;
};

export default React.memo(StatusContent);
