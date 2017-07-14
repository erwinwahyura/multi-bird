import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ListUser from '@/components/ListUser'
import Room from '@/components/Room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListUser',
      component: ListUser,
      children: [
        {
          path: '',
          component: Room
        }
      ]
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
