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
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
    },
  },

  modules: ['@nuxtjs/apollo', '@nuxtjs/seo'],

  // global <head> defaults (optional override of some SEO defaults)

  app: {
    head: {
      titleTemplate: '%s – My Site',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]
    }
  },
  site: {
    url: 'http://localhost:3000/',
    name: 'Guida Nuxt Starter',
    description: 'This is a simple starter for developing websites with nuxt and strapi.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    //indexable: false // tell search engines not to index the site
  },
  sitemap: {
    sources: ['/api/fetch-urls'],
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.STRAPI_URL || 'http://localhost:1337/graphql',
      },
    },
  },
})