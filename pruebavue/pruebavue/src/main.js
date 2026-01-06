import PrimeVue from "primevue/config";
import { createApp } from 'vue'
import App from './app.vue'
import Card from "primevue/card";
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import router from "@/router/index.js";
import i18n from "@/i18n.js";

createApp(App)
    .use(PrimeVue,{ripple: true})
    .use(router)
    .use(i18n)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .mount('#app')
