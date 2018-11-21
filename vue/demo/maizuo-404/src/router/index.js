import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/views/home/index'
import Film from '@/views/film/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
      
    },
    {
      path: '/film',
      name: 'film',
      component: Film,
      meta:{
      	notKeepAlive:true
      }
    }
  ]
})
