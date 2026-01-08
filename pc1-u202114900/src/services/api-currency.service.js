import http from "./http-common.service.js";
/* Autora: Sharon Barrial U202114900
Aqui usamos el http que utilizamos para importar el axios
y creamos una clase llamada CurrencyService
que nos permitira obtener todos los currencies
mediante la funcion getAllCurrencies,
agregamos la ruta de la api que nos proporciona los currencies
y luego lo exportamos para poder usarlo en el componente de vue
*/
class CurrencyService {
  getAllCurrencies() {
    return http.get("/v1/currencies");
  }
  getCurrencyById(id) {
    return http.get(`/v1/currencies/${id}`);
  }
}

export default new CurrencyService();