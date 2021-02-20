import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  // head: {
  //   title: 'beabot',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //   ],
  //   link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  // },
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'BeAbot - éco-conception web',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'Beabot' },
      {
        hid: 'description',
        name: 'description',
        content:
          'L’éco-conception web, c’est concilier respect de l’environnement et technologies numériques de pointe pour un internet durable.',
      },
      { property: 'og:image:width', content: '1112' },
      { property: 'og:image:height', content: '337' },
      { name: 'twitter:site', content: '@AbotBenoit' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.BASE_URL,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-purgecss',
    'nuxt-font-loader',
    // 'nuxt-compress',
    'nuxt-precompress',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // 'nuxt-webfontloader',
    '@nuxt/content',
    '@ax2/lozad-module',
    '@nuxtjs/sitemap',
  ],
  content: {
    // Options
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-coldark-dark.css',
      },
    },
  },
  // webfontloader: {
  //   typekit: {
  //     id: 'akf4akv',
  //   },
  // },
  fontLoader: {
    // Paste a new custom link here (for example Typekit)
    url: 'https://use.typekit.net/akf4akv.css',

    prefetch: true,
    preconnect: true,
  },
  purgeCSS: {
    whitelist: [
      'class',
      'token',
      'nuxt-content-highlight',
      'language-css',
      'language-js',
      'line-numbers',
      'comment',
      'selector',
      'punctuation',
      'proprety',
      'number',
      'unit',
      'pre[class*="language-"]',
    ],
    // whitelistPatternsChildren: [/^token/, /^nuxt-content-highlight/],
    whitelistPatternsChildren: [/token$/, /pre$/],
    // whitelistPatternsChildren: [/token$/, /nuxt-content-highlight$/],
  },
  styleResources: {
    scss: ['~/assets/css/vars/*.scss', '~/assets/css/mixins/*.scss'],
  },

  pageTransition: 'page',

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {},
  router: {
    prefetchLinks: false,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip'],
    },

    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  },
  sitemap: {
    hostname: 'https://beabot.fr',
    // process.env.BASE_URL,
    gzip: true,
    routes() {
      return getRoutes()
    },
  },
}
