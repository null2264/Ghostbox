import fs from 'node:fs';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compileTime from 'vite-plugin-compile-time';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

/** Return file as string, or return empty string. */
const readFile = (filename: string) => {
  try {
    return fs.readFileSync(filename, 'utf8');
  } catch {
    return '';
  }
};

export default defineConfig({
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
  },
  assetsInclude: ['**/*.oga'],
  server: {
    port: 2264,
  },
  plugins: [
    compileTime(),
    createHtmlPlugin({
      template: 'app/index.ejs',
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
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
      babel: {
        configFile: './babel.config.cjs',
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: './node_modules/twemoji/assets/svg/*',
          dest: './packs/emoji/',
        }, {
          src: './app/instance',
          dest: '.',
        }, {
          src: './custom/instance',
          dest: '.',
        },
      ],
    }),
  ],
});
