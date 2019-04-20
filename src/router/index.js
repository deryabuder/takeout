import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods.vue'
import Ratings from '@/components/Ratings.vue'
import Seller from '@/components/Seller.vue'
import Notice from '@/components/Notice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Goods,
      redirect: '/goods',
      children: [
        {
          path: 'notice',
          component: Notice
        }
      ]
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    }
  ]
})
