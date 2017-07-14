import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import ListUser from '@/components/ListUser'
import Room from '@/components/Room'
import PlayerGame from '@/components/PlayerGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ingame',
      name: 'ingame',
      component: PlayerGame
    }
  ]
})
