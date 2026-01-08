import { createI18n } from 'vue-i18n'

//importar otros archivos
import en from "@/en.js"

const i18n = createI18n({
  locale:'fr',
  messages:{
    en,
    es:{
      hello:'hola',
      greet:'hola {user}'
    },
    fr:{
      hello:'bonjour',
      greet:'bonjour {user}'
    }
  }
})

export default i18n;