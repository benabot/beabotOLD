export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'beabot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
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
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxt/content',
    '@ax2/lozad-module',
  ],
  content: {
    // Options
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-coldark-dark.css',
      },
    },
  },
  webfontloader: {
    typekit: {
      id: 'akf4akv',
    },
  },
  purgeCSS: {
    whitelist: ['class', 'token'],
    whitelistPatternsChildren: [/token$/, /nuxt-content-highlight$/],
  },
  styleResources: {
    scss: ['~/assets/css/vars/*.scss', '~/assets/css/mixins/*.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },
  pageTransition: 'page',
}
