import axios from "axios";
/* Autora: Sharon Barrial U202114900
hacemos importacion del axios el cual nos permitira
hacer conexiones a apis y lo creamos dando referencia
 a la api solicitada en el enunciado y
 que el contenido sea json
*/
export default axios.create({
  baseURL: "https://freetestapi.com/api/",
  headers: {
    "Content-type": "application/json"
  }
}); // create a new instance of axios