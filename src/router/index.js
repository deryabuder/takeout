import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods.vue'
import Ratings from '@/components/Ratings.vue'
import Seller from '@/components/Seller.vue'
import Notice from '@/components/Notice.vue'
import Food from '@/components/Food.vue'
import CheckList from '@/components/CheckList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // 路由有问题
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods,
      children: [
        {
          path: 'checklist',
          component: CheckList
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
