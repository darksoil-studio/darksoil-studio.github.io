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
        'drapac': 'drapac.html',
        'people': 'people/index.html'
      }
    }
  },
  plugins: [
    {
      name: 'clean-urls',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/people') {
            req.url = '/people/index.html'
          } else if (req.url === '/contact') {
            req.url = '/contact.html'
          } else if (req.url === '/corri') {
            req.url = '/corri.html'
          } else if (req.url === '/bouy-os') {
            req.url = '/bouy-os.html'
          } else if (req.url === '/dashchat') {
            req.url = '/dashchat.html'
          } else if (req.url === '/roadmap') {
            req.url = '/roadmap.html'
          } else if (req.url === '/drapac') {
            req.url = '/drapac.html'
          }
          next()
        })
      }
    }
  ]
})