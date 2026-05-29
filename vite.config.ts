import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      }
    }
  },
  plugins: [{
    name: 'blog-routing',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/blog') req.url = '/blog.html';
        next();
      });
    }
  }]
})
