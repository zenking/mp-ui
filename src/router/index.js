import Vue from 'vue'
import Router from 'vue-router'
import Toast from '@/components/toast'
import Loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    }, {
      path: '/',
      name: 'toast',
      component: Toast
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    }
  ]
})
