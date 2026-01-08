import {createI18n} from "vue-i18n";
/* Autora: Sharon Barrial U202114900
Aqui usamos la libreria i18n para poder hacer la internalizacion
de los textos en la pagina web, creamos un objeto i18n
y le pasamos el locale y los mensajes en ingles y español
*/
import en from "@/locale/en.js";
import es from "@/locale/es.js";

const  i18n = createI18n({
  locale: 'es',
  messages: {
    en,
    es
  }
})
export default i18n