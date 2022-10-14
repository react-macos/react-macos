export default {
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'https://www.firstmth.com:8000/',
      changeOrigin: true,
    },
  },
}
