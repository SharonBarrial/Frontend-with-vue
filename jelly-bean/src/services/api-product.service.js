import http from "./http-common.service.js";
/* aqui usamos el http que utilizamos para importar el axios
* y creamos una clase llamada ProductService que nos permitira obtener todos los productos
* mediante la funcion getAllProducts, agregamos la ruta de la api que nos proporciona los productos
* y luego lo exportamos para poder usarlo en el componente de vue
* */
class ProductService {
  getAllProducts() {
    return http.get("/Beans");
  }
}

export default new ProductService();