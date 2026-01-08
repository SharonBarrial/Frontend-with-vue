//Todas las configuraciones de Vue se realizan en este archivo
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config' //importa material design de primevue
import 'primevue/resources/themes/arya-green/theme.css'

import Card from 'primevue/card'
import Toolbar from 'primevue/toolbar'
import Rating from 'primevue/rating'

const app = createApp(App);

app.use(PrimeVue);
//esto es obligatorio parte de la rubrica (pv-card, pv-toolbar, pv-rating)

app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-rating', Rating);
app.mount('#app')
