import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'dashchat': 'dashchat.html',
        'corri': 'corri.html',
        'bouy-os': 'bouy-os.html', 
        'contact': 'contact.html',
        'roadmap': 'roadmap.html',
        'drapac': 'drapac.html'
      }
    }
  }
})