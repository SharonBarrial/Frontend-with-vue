import './assets/main.css'
/* Miguel Ybañez U20201B298

Aqui se importo primevue para poder usar su libreria y por ende sus componentes
utilice el componente de toolbar y card para poder mostrar la informacion de los productos del enuniado
*/
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";

const app= createApp(App);
app.use(PrimeVue);
app.component('pv-toolbar', Toolbar)
app.component("pv-card", Card)
app.mount('#app')
