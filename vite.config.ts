/*import { defineConfig } from 'vite';

export default defineConfig({
  base: ''
});


import { resolve } from 'path' 
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hc_intro: resolve(__dirname, 'hc-intro/index.html'),
      },
    },
  },
});*/

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dash: resolve(__dirname, 'dash-chat.html'),
        corri: resolve(__dirname, 'corri.html'),
        bouy: resolve(__dirname, 'bouy-os.html'),
        // Add more pages here
      }
    }
  }
})