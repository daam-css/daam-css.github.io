import Vue from "vue"
import VueHead from "vue-head"
import VueProgressbar from 'vue-progressbar'

import App from "@/App.vue"
import router from "@/router/index.ts"

Vue.use(VueHead)

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})