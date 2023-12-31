import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import compileTime from 'vite-plugin-compile-time';
import EnvironmentPlugin from 'vite-plugin-environment';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';
import vitePluginRequire from 'vite-plugin-require';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const availableLocales = JSON.stringify(fs.readdirSync('./src/locales'));

/** Return file as string, or return empty string. */
const readFile = (filename: string) => {
  try {
    return fs.readFileSync(filename, 'utf8');
  } catch {
    return '';
  }
};

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  const nonce = 'NONCE_PLACEHOLDER';

  const {
    DEVSERVER_URL,
    BACKEND_URL,
  } = process.env;

  const DEFAULTS = {
    DEVSERVER_URL: 'http://localhost:3036',
    PATRON_URL: 'http://localhost:3037',
    BACKEND_URL: 'http://localhost:4000',
  };

  const backendUrl = (() => {
    try {
      return new URL(BACKEND_URL || DEFAULTS.BACKEND_URL);
    } catch {
      return new URL(DEFAULTS.BACKEND_URL);
    }
  })();

  const devServerUrl = (() => {
    try {
      return new URL(DEVSERVER_URL || DEFAULTS.DEVSERVER_URL);
    } catch {
      return new URL(DEFAULTS.DEVSERVER_URL);
    }
  })();

  return {
    build: {
      assetsDir: 'packs',
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: 'packs/assets/[name]-[hash].[ext]',
          chunkFileNames: 'packs/js/[name]-[hash].js',
          entryFileNames: 'packs/[name]-[hash].js',
        },
      },
      outDir: 'static',
      emptyOutDir: true,
    },
    assetsInclude: ['**/*.oga'],
    server: {
      port: 2264,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Security-Policy': `upgrade-insecure-requests;style-src 'self' 'nonce-${nonce}';font-src 'self';script-src 'self' 'nonce-${nonce}' ;connect-src 'self' https://${backendUrl.hostname} wss://${backendUrl.hostname} http://${devServerUrl.hostname} ws://localhost:*/ ws://localhost:*/ws;media-src 'self' https:;img-src 'self' data: blob: https:;default-src 'none';base-uri 'none';frame-ancestors 'none';manifest-src 'self';`,
      },
    },
    plugins: [
      checker({ typescript: true }),
      EnvironmentPlugin({
        NODE_ENV: 'production',
        // null = optional, undefined = required
        BACKEND_URL: null,
        DEVSERVER_URL: null,
        AVAILABLE_LOCALES: availableLocales,
      }, { loadEnvFiles: false }),
      // @ts-ignore
      vitePluginRequire(),
      compileTime(),
      createHtmlPlugin({
        template: 'index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: false,
        },
        inject: {
          data: {
            snippets: readFile('custom/snippets.html'),
          },
        },
      }),
      {
        name: 'html-inject-nonce',
        enforce: 'post',
        transformIndexHtml(html) {
          if (mode !== 'development') return html;

          const regex = /<(style|script)/gi;
          const replacement = `<$1 nonce="${nonce}"`;

          return html.replace(regex, replacement);
        },
      },
      react({
        // Use React plugin in all *.jsx and *.tsx files
        include: '**/*.{jsx,tsx}',
        babel: {
          configFile: './babel.config.cjs',
        },
      }),
      VitePWA({
        injectRegister: null,
        strategies: 'injectManifest',
        injectManifest: {
          injectionPoint: undefined,
          plugins: [
            // @ts-ignore
            compileTime(),
          ],
        },
        manifestFilename: 'manifest.json',
        manifest: {
          name: 'Ghostbox',
          short_name: 'Ghostbox',
          description: 'An alternative frontend for Akkoma',
        },
        srcDir: 'src/soapbox/service-worker',
        filename: 'sw.ts',
      }),
      viteStaticCopy({
        targets: [
          {
            src: './node_modules/twemoji/assets/svg/*',
            dest: './packs/emoji/',
          }, {
            src: './src/instance',
            dest: '.',
          }, {
            src: './custom/instance',
            dest: '.',
          }, {
            src: './src/locales/*',
            dest: 'locales/',
          },
        ],
      }),
    ],
    resolve: {
      alias: [
        { find: 'soapbox', replacement: fileURLToPath(new URL('./src/soapbox', import.meta.url)) },
        { find: 'assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      ],
    },
  };
});
