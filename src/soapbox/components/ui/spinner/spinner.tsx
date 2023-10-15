import clsx from 'clsx';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Stack from '../stack/stack';
import Text from '../text/text';

interface ISpinner {
  /** Width and height of the spinner in pixels. */
  size?: number
  /** Whether to display "Loading..." beneath the spinner. */
  withText?: boolean
  strokeWidth?: number
  className?: string
}

/** Spinning loading placeholder. */
const Spinner = ({ size = 30, withText = true, strokeWidth = 3, className = '' }: ISpinner) => (
  <Stack space={2} justifyContent='center' alignItems='center'>
    <div style={{ width: size, height: size, padding: Math.max(0, strokeWidth - 2) }}>
      <svg
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={clsx('animate-spinner overflow-visible stroke-gray-700 dark:stroke-gray-600', className)}
      >
        <path
          d='M23 12C23 18.0751 18.0751 23 12 23'
          strokeWidth={strokeWidth}
          strokeLinecap='round'
        />
      </svg>
    </div>


    {withText && (
      <Text theme='muted' tracking='wide'>
        <FormattedMessage id='loading_indicator.label' defaultMessage='Loading…' />
      </Text>
    )}
  </Stack>
);

export default Spinner;
