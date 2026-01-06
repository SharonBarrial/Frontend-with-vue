import { createRouter, createWebHistory } from 'vue-router'
import HomepageComponent from "../public/pages/homepage.component.vue";
import DrinkwareComponent from "../store/pages/drinkware.component.vue";
import AccessoriesComponent from "../store/pages/accessories.component.vue";
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";

const router = createRouter(
{
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomepageComponent, name: 'home' },
    { path: '/store/collections/all-drinkware', component: DrinkwareComponent, name: 'drinkware'},
    { path: '/store/collections/accessories', component: AccessoriesComponent, name: 'accessories'},
    { path: '/:notFound(.*)', component: PageNotFoundComponent, name: 'notFound' }
  ]
})

export default router;