export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crm-cipta-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // tailwind css
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // tailwind css Just-In-Time
  tailwindcss: {
    jit: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // fix error linting
  // extend(config, ctx) {
  //   if (ctx.dev && ctx.isClient) {
  //       config.module.rules.push({
  //           enforce : 'pre',
  //           test    : /\.(js|vue)$/,
  //           loader  : 'eslint-loader',
  //           exclude : /(node_modules)/,
  //           options : {
  //               fix : true
  //           }
  //       });
  //   }
  // }
}
