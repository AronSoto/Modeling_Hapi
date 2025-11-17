export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    baseURL: '/Modeling_Hapi/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Hapi 2.0',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Empresa de compra y venta de acciones y criptomonedas' }
      ]
    }
  },

  ssr: false,
  
  nitro: {
    preset: 'static',
    output: {
      publicDir: 'dist'
    }
  },

  modules: ['@nuxt/eslint'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  compatibilityDate: '2025-11-17'
})
