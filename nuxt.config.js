const pkg = require("./package");
const messages = require("./services/lang");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: `${pkg.title}`,
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "title",
        name: "title",
        content: `${pkg.title}`
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      },
      {
        hid: "og:title",
        name: "og:title",
        content: `${pkg.title}`
      },
      {
        hid: "og:description",
        name: "og:description",
        content: pkg.description
      },
      {
        hid: "og:image",
        property: "og:image",
        content: ``
      }
    ],
    script: [
      {
        src: "http://d3js.org/d3.v3.min.js"
      },
      // {
      //   src: "https://d3js.org/d3-dispatch.v1.min.js"
      // },
      // {
      //   src: "https://d3js.org/d3-quadtree.v1.min.js"
      // },
      // {
      //   src: "https://d3js.org/d3-timer.v1.min.js"
      // },
      // {
      //   src: "https://d3js.org/d3-force.v1.min.js"
      // },
      {
        src: "/js/offline.min.js",
        body: true
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#98c1d9"
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src: "assets/styles/main.scss",
      lang: "scss"
    }
  ],
  router: {
    middleware: ["router"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/ssr.js",
    "~/plugins/axios.js",
    {
      src: "~/plugins/no-ssr.js",
      ssr: false
    }
  ],
  render: {
    resourceHints: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        seo: false,
        strategy: "prefix_except_default",
        locales: [
          {
            code: "th",
            iso: "th-TH",
            name: "TH"
          },
          {
            code: "en",
            iso: "en-US",
            name: "EN"
          }
        ],
        detectBrowserLanguage: false,
        defaultLocale: "th",
        vueI18n: {
          fallbackLocale: "th",
          messages
        }
      }
    ],
    [
      "nuxt-rfg-icon",
      {
        masterPicture:
          "http://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2014-10-19/3d686326fc83540b583856510c4c9e9c.ico"
      }
    ],
    "nuxt-babel",
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
    // ['@nuxtjs/google-analytics', {
    //   id: '',
    //   autoTracking: {
    //     pageviewOnLoad: false,
    //     exception: true
    //   }
    // }],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: true,
    debug: false,
    https: true,
    port: 443,
    host: pkg.apiUrl
    // prefix: '/wp-json/api/v1', moved to apiUrl.js
  },
  /*
   ** Build configuration
   */
  buildDir: "nuxt",
  build: {
    publicPath: "/",
    parallel: true,
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ["en", "th"]
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      if (!ctx.isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, "./pages/**/*.vue"),
              path.join(__dirname, "./layouts/**/*.vue"),
              path.join(__dirname, "./components/**/*.vue")
            ]),
            whitelist: ["html", "body"]
          })
        );
      }
    }
  }
};
