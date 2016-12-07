// 引用 vue 没什么要说的
import Vue from 'vue'
// 引用路由
import resize from '../resize'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// 光引用不成，还得使用
Vue.use(VueRouter)
Vue.use(VueResource)
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './route-config'
// 使用配置文件规则
const router = new VueRouter({
  routes
})
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
resize();
