import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods.vue'
import Ratings from '@/components/Ratings.vue'
import Seller from '@/components/Seller.vue'
import Notice from '@/components/Notice.vue'
import Food from '@/components/Food.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/food/:index/:num',
      component: Food,
      name: 'food'
    },
    {
      path: '/notice',
      component: Notice
    }
  ]
})
