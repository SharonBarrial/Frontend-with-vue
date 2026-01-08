import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar'
import Card from 'primevue/card'

const app = createApp(App)

app.use(PrimeVue)
app.component("pv-toolbar", Toolbar)
app.component("pv-card", Card)


app.mount('#app')

