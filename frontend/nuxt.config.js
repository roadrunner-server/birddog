export default {
  ssr: false,
  target: 'static',

  env: {
    API_URL: process.env.API_URL || null,
    WS_URL: process.env.WS_URL || null,
  },

  head: {
    title: 'Birddog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  css: [],

  plugins: [
    {src: '~/plugins/logger.js'},
    {src: '~/plugins/axios.js'},
    {src: '~/plugins/cenrifugo.js'},
    {src: '~/plugins/api.js'},
    {src: '~/plugins/settings.js'},
    {src: '~/plugins/chart.js', mode: 'client'},
    {src: '~/plugins/bootstrap.js'},
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment',
    ['nuxt-highlightjs', {
      style: 'obsidian'
    }],
    '@nuxtjs/toast',
  ],

  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'nuxt-lodash'
  ],

  toast: {
    position: 'top-center',
    duration: 3000,
    closeOnSwipe: true,
    theme: "bubble"
  },

  bootstrapVue: {
    icons: true,
    components: ['BDropdown', 'BDropdownItem', 'BButton']
  },

  build: {}
}
