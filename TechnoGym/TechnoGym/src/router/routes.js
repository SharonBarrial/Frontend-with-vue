import HomeView from '@/core/public/pages/home-view.component.vue'
import PageNotFound from '@/core/public/pages/page-not-found.component.vue'

export const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/analytics/health-checks',
    name: 'Health Checks Table',
    component: () => import('@/core/analytics/pages/health-checks-table.component.vue')
  },

  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page Not Found',
    component: PageNotFound
  }
]