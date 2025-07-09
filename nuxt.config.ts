// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  ssr: false,
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  imports: {
    dirs: ['composables'],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.STRAPI_URL || 'http://localhost:1337/api',
    },
  },

  modules: [
    '@nuxtjs/apollo',
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.STRAPI_URL || 'http://localhost:1337/graphql',
      },
    },
  },
})
