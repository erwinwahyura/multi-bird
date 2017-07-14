import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import ListUser from '@/components/ListUser'
import Room from '@/components/Room'
import PlayGame from '@/components/PlayGame'
import satu from '@/components/Player1'
import dua from '@/components/Player2'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/PlayGame',
      name: 'PlayGame',
      component: PlayGame,
      children: [
        {
          path: '',
          component: satu
        },
        {
          path: '',
          component: dua
        }
      ]
    }
  ]
})
