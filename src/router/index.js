import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Docs from '../views/Docs.vue'
import Step0_1 from '../views/docs/section/0-1.vue'
import Step0_2 from '../views/docs/section/0-2.vue'
import Step1_1 from '../views/docs/tutorial/1-1.vue'
import Step1_2 from '../views/docs/tutorial/1-2.vue'
import Step1_3 from '../views/docs/tutorial/1-3.vue'
import Step5_1 from '../views/docs/api/5-1.vue'
import Step4_1 from '../views/docs/server/4-1.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'StarSkin Docs 3.0' }
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    meta: { title: 'StarSkin Docs 首页' }
  },
  {
    path: '/docs/tutorial/1-1',
    name: 'DocsTutorial1-1',
    component: Step1_1,
    meta: { title: '注册与登录' }
  },
  {
    path: '/docs/tutorial/1-2',
    name: 'DocsTutorial1-2',
    component: Step1_2,
    meta: { title: '角色配置' }
  },
  {
    path: '/docs/tutorial/1-3',
    name: 'DocsTutorial1-3',
    component: Step1_3,
    meta: { title: '模组配置' }
  },
  {
    path: '/docs/section/0-1',
    name: 'DocsSection0-1',
    component: Step0_1,
    meta: { title: '服务条款' }
  },
  {
    path: '/docs/section/0-2',
    name: 'DocsSection0-2',
    component: Step0_2,
    meta: { title: '隐私声明' }
  },
  {
    path: '/docs/api/5-1',
    name: 'DocsApi5-1',
    component: Step5_1,
    meta: { title: 'StarSkin API' }
  },
  {
    path: '/docs/server/4-1',
    name: 'Docsserver4-1',
    component: Step4_1,
    meta: { title: '新增服务' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'StarSkin Docs 3.0'; // 设置页面标题
  next();
});

export default router
