import "@babel/polyfill"
import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'
import VueFloatLabel from 'vue-float-label'
import WebFont from 'webfontloader'
const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')

Vue.use(VueFloatLabel)

WebFont.load({
  google: {
    families: ['Kanit&subset=thai']
  }
})

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 500,
  scale: 0.9,
  distance: '50px',
  mobile: false
})

Vue.use(VueAwesomeSwiper)
