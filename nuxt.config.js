export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '市井(@ichii731) Portfolio',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ic731.net' },
      { property: 'og:title', content: '市井(@ichii731) Portfolio' },
      { property: 'og:description', content: '自称何でもオタク「市井(@ichii731)」のポートフォリオです.「オタク×IT」をテーマにしたコンテンツを提供しています!' },
      { property: 'og:image', content: 'https://ic731.net/ogp.jpg' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:url', content: 'https://ic731.net' },
      { property: 'twitter:site', content: '@ichii731' },
      { property: 'twitter:title', content: '市井(@ichii731) Portfolio' },
      { property: 'twitter:description', content: '自称何でもオタク「市井(@ichii731)」のポートフォリオです.「オタク×IT」をテーマにしたコンテンツを提供しています!' },
      { property: 'twitter:image', content: 'https://ic731.net/ogp.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Router Coifig
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/errors/404.vue')
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/common.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-2158884523672825',
      pageLevelAds: false,
    }]
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
