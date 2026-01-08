//caso hipo
//Autor: Sharon Antuanet Ivet Barrial Marin
//El proposito del proyecto fue implementar los datos de un api a la pagina web, para ello se utilizo la api de fakestoreapi.com
//para obtener los datos de los productos y mostrarlos en la pagina web, se utilizo primevue para la implementacion de los componentes
//Se implementaron los componentes de primevue, card, rating y toolbar, se utilizo el componente de card para mostrar los productos
//de la api, el componente de rating para mostrar la calificacion de los productos y el componente de toolbar para mostrar el titulo
//de la pagina web.
//Importa el archivo CSS principal para estilos.
import './assets/main.css'

import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import App from './App.vue'
import Toolbar from 'primevue/toolbar'
import Card from 'primevue/card'
import Rating from 'primevue/rating'

const app= createApp(App);

app.use(PrimeVue);
//esto es obligatorio parte de la rubrica
app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-rating', Rating);

app.mount('#app')