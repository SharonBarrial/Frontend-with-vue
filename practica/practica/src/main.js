import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card"
import Rating from "primevue/rating";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {ripple: true});
app.component('pv-sidebar', Sidebar)
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-rating', Rating);
app.mount('#app');
