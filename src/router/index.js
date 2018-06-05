import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import header from '@/components/header'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
    	path:'/header',
    	name:'header',
    	component:header
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
