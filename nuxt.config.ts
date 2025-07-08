// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
  ],
  },
  runtimeConfig: {
  public: {
    strapiBaseUrl: process.env.STRAPI_URL || 'http://localhost:1337/api'
  }
}
})