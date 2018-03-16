import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App, // 顶层路由
      children: [ // 二级路由
        // 地址为空时跳转home页面
        {
          path: '/',
          redirect:'/home'
        },
        {
          path: '/home',
          component: home
        }
      ]
    }
  ]
})
