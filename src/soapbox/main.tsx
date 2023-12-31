declare global {
  interface Window {
    __webpack_nonce__: string
    _akkomaNonce: string
    opera?: string
  }
}

try {
  window.__webpack_nonce__ = window._akkomaNonce;
} catch (e) {
  window.__webpack_nonce__ = '';
}

import './polyfills';

import * as OfflinePluginRuntime from '@lcdp/offline-plugin/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';

import * as BuildConfig from 'soapbox/build-config';
import { printConsoleWarning } from 'soapbox/utils/console';

import '@fontsource/nunito-sans/200.css';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/500.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/800.css';
import '@fontsource/nunito-sans/900.css';
import '@fontsource/roboto-mono/400.css';
import 'line-awesome/dist/font-awesome-line-awesome/css/all.css';
import 'react-datepicker/dist/react-datepicker.css';

import './iframe';
import '../styles/application.scss';
import '../styles/tailwind.css';

import './precheck';
import { default as Soapbox } from './containers/soapbox';
import * as monitoring from './monitoring';
import ready from './ready';
import { registerSw } from './utils/sw';

// Sentry
monitoring.start();

if (BuildConfig.NODE_ENV === 'production') {
  printConsoleWarning();
  registerSw('/sw.js');
}

ready(() => {
  if (BuildConfig.NODE_ENV !== 'production')
    window.__webpack_nonce__ = window.__webpack_nonce__ || 'NONCE_PLACEHOLDER';

  const goober = document.querySelector('#_goober');
  if (goober instanceof HTMLStyleElement)
    goober.nonce = window.__webpack_nonce__;

  const container = document.getElementById('soapbox') as HTMLElement;
  const root = createRoot(container);

  root.render(<Soapbox />);

  if (BuildConfig.NODE_ENV === 'production') {
    // avoid offline in dev mode because it's harder to debug
    // https://github.com/NekR/offline-plugin/pull/201#issuecomment-285133572
    OfflinePluginRuntime.install();
  }
});
