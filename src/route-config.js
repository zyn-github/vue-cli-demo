/**
 * Created by Zheng on 2016/11/1.
 */
// export default {
import index from './components/index.vue'
import mission from './components/index/mission.vue'
import shop from './components/index/shop.vue'
import bonds from './components/bonds.vue'
import info from './components/info.vue'
import my from './components/my.vue'
import detial from './components/index/detial.vue'     
export default [
  {
    path: '/',
    redirect: '/mission',
    component: index,
    children: [
      {path: '/mission',component: mission,default:mission},
      {path: '/shop',component: shop}
    ]
  },
  {
    path: '/bonds',
    component: bonds
  },
  {
    path: '/info',
    component: info
  },
  {
    path: '/my',
    component: my
  },
  {
    path: '/detial/',
    component: detial
  }
] 