module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // styleResources: {
    //   scss: './assets/scss/index.scss' 
    // }
  },
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/axios'
  ],
  css: ['~assets/scss/index.scss'],

  plugins: [
    { src: '~plugins/vant.js', ssr: true },
    '~plugins/axios',
    '@/plugins/router'
  ],
  proxy: {
    '/restapi': {  //使用"/api"来代替"localhost：8080" 
      target: 'https://h5.ele.me', //源地址 
      changeOrigin: true, //改变源 
      pathRewrite: { 
        '^/restapi': 'http://localhost:8001/restapi' //路径重写 
      } 
    },
    '/elm': {  //使用"/api"来代替"localhost：8080" 
      target: 'http://localhost:3000', //源地址 
      changeOrigin: true, //改变源 
      pathRewrite: { 
        '^/elm': 'http://localhost:8001' //路径重写 
      } 
    },
  }
}

