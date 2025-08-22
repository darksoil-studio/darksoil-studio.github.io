import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        dash: 'dash-chat.html',
        corri: 'corri.html',
        bouy: 'bouy-os.html', 
        contact: 'contact.html',
        roadmap: 'roadmap.html',
        drapac: 'drapac.html'
      }
    }
  }
})