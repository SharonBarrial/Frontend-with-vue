import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import PageNotFoundComponent from "../public/pages/page-not-found.vue";
import MentalStateExamView from "@/nursing/pages/mental-state-exam-view.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',    component: HomeComponent},
        { path: '/nursing/mental-state-exams', component: MentalStateExamView},
        { path: '/',        redirect: '/home'},
        { path: '/:pathMatch(.*)', redirect: '/404' },
        { path: '/404', name: '404', component: PageNotFoundComponent }
    ]
});

export default router;