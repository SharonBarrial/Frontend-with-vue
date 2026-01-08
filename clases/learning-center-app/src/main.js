import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Rating from "primevue/rating";
import InputText from "primevue/inputtext";
import InputMask from 'primevue/inputmask';



//create inyección de dependencias para la internalización
import i18n from "@/i18n";

const app = createApp(App);

app.use(PrimeVue);//inyección de dependencias ui design
app.use(i18n) //inyectamos generalizacion

app.component('pv-button', Button)
app.component('pv-calendar', Calendar)
app.component('pv-rating', Rating)
app.component('pv-input-text', InputText)
app.component('pv-inp-mask', InputMask)

app.mount('#app')