import { Localized } from '@fluent/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAboutPage } from 'soapbox/actions/about';
import { useSoapboxConfig, useSettings, useAppDispatch } from 'soapbox/hooks';

import { languages } from '../preferences';

/** Displays arbitary user-uploaded HTML on a page at `/about/:slug` */
const AboutPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams<{ slug?: string }>();

  const settings = useSettings();
  const soapboxConfig = useSoapboxConfig();

  const [pageHtml, setPageHtml] = useState<string>('');
  const [locale, setLocale] = useState<string>(settings.get('locale'));

  const { aboutPages } = soapboxConfig;

  const page = aboutPages.get(slug || 'about');
  const defaultLocale = page?.get('default') as string | undefined;
  const pageLocales = page?.get('locales', []) as string[];

  useEffect(() => {
    const fetchLocale = Boolean(page && locale !== defaultLocale && pageLocales.includes(locale));
    dispatch(fetchAboutPage(slug, fetchLocale ? locale : undefined)).then(html => {
      setPageHtml(html);
    }).catch(error => {
      // TODO: Better error handling. 404 page?
      setPageHtml('<h1>Page not found</h1>');
    });
  }, [locale, slug]);

  const alsoAvailable = (defaultLocale) && (
    <div>
      <Localized id='about-Page--available'>
        <span>Available in:</span>
      </Localized>
      {' '}
      <ul className='inline list-none p-0'>
        <li className="inline after:content-['_·_']">
          <a href='#' onClick={() => setLocale(defaultLocale)}>
            {/* @ts-ignore */}
            {languages[defaultLocale] || defaultLocale}
          </a>
        </li>
        {
          pageLocales?.map(locale => (
            <li className="inline after:content-['_·_'] last:after:content-none" key={locale}>
              <a href='#' onClick={() => setLocale(locale)}>
                {/* @ts-ignore */}
                {languages[locale] || locale}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );

  return (
    <div className='prose mx-auto py-20 dark:prose-invert'>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

      {alsoAvailable}
    </div>
  );
};

export default AboutPage;
