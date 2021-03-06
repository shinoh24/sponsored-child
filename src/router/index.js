import Vue from 'vue'
import Router from 'vue-router'

import SponsoredChild from '../components/SponsoredChild.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sponsored Child',
      component: SponsoredChild,
    }
  ]
})

export default router
