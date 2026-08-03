export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    strictNuxtContentPaths: true
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  nitro: {
    preset: 'netlify-static'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap' }
      ]
    }
  },

  runtimeConfig: {
    decathlonAffiliateUrlTemplate: process.env.DECATHLON_AFFILIATE_URL_TEMPLATE || 'DECATHLON_AFFILIATE_TEMPLATE_PLACEHOLDER',
    decathlonAwinPublisherId: process.env.DECATHLON_AWIN_PUBLISHER_ID || 'AWIN_PUBLISHER_ID_PLACEHOLDER',
    decathlonAwinAdvertiserId: process.env.DECATHLON_AWIN_ADVERTISER_ID || 'AWIN_ADVERTISER_ID_PLACEHOLDER',
    public: {
      amazonAffiliateTag: process.env.NUXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'wingfoil-empfehlung-21',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://wingfoil-empfehlung.de'
    }
  },

  content: {
    highlight: false
  },

  typescript: {
    strict: true
  }
})
