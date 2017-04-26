import Vue from 'vue'
import Router from 'vue-router'
import Index from '@views/Index.vue'

Vue.use(Router)

// /**
// * Function to async load views.
// * @param {string} name File to async load, without .vue
// */
// function view(name: string) {
//   return (resolve: any) => {
//     require([`@/components/${name}.vue`], resolve)
//   }
// }

let routes = [
  {
    path: '/',
    component: Index
  }
]

export default new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if( savedPosition ) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})