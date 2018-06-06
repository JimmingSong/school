import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import header from '@/components/header'
import register from '@/components/register'
import login from '@/components/login'
import forget from '@/components/forgetpwd'

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
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/forget',
      name:'forget',
      component:forget
    }
  ]
})
