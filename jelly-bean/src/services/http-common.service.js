import axios from "axios";
/* Miguel Ybañez U20201B298

hacemos importacion del axios el cual nos permitira hacer conexiones a apis
lo creamos dando referencia a la api solicitada en el enunciado y que el contenido sea json
*/
export default axios.create({
  baseURL: "https://jellybellywikiapi.onrender.com/api/",
  headers: {
    "Content-type": "application/json"
  }
}); // create a new instance of axios