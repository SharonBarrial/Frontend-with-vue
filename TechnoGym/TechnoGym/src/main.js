import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-lime/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import Toolbar from "primevue/toolbar"
import Card from 'primevue/card'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app
    .use(router)
    .use(PrimeVue)
      .component("pv-toolbar", Toolbar)
      .component("pv-card", Card)
      .component("pv-button", Button)
      .component("pv-datatable", DataTable)
      .component("pv-column", Column)
      .component("pv-inputtext", InputText)
    .mount('#app')
