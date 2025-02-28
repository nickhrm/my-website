// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/seo', '@nuxt/content', '@nuxt/ui', '@nuxt/image'],


  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },

  },

  site: {
    url: 'https://nickhrm.de',
    name: 'Nick Hermann',
    enabled: true,
  },
})