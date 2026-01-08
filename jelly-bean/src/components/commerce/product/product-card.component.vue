<!-- Miguel Ybañez U20201B298
aqui hacemos uso del apiservice que creamos para traer los datos y mostrarlo en la pagina
este componente solo crea un card individual para los productos que contendra los datos correspondientes
segun el "id" que reciba del componentes products card, el cual enviara a travez de un bucle para
ir aumentando el id hasta llegar al ultimo elemento
Usamos a funcion onMounted para recibir la respuesta de la peticion que hacemos atravez del service
esta respuesta sera async por lo cual se realizara al iniciar el componente
luego con la variable product hacemos referencia a que sera un objeto, el cual se recibira en response
response es un objeto, pero lo que nos importa es su objeto hijo "items" ya que ahi se encuentran
los productos, accedemos al item por posicion y asi obtenemos el producto y sus atributos-->
<script setup>
import ApiProductService from "@/services/api-product.service.js";
import {onMounted, ref} from "vue";

const props = defineProps(['id']);
const product = ref({})

onMounted(async () => {
  const response = await ApiProductService.getAllProducts();
  product.value = response.data.items[props.id];
  console.log(product.value)
})

</script>

<template>
  <pv-card class="product-card" role="contentinfo">
    <template #content>
      <h1>Name: {{product.flavorName}}</h1>
      <div class="product-ingredients">
        <h2>Ingredients: </h2>
        <h3 v-for="ingredient in product.ingredients" :key="ingredient.id">{{ingredient}}</h3>
      </div>

      <br>
      <p>Gluten Free: <span v-if="product.glutenFree" >yes</span>
        <span v-if="!product.glutenFree" >no</span>
      </p>
      <p>Sugar Free: <span v-if="product.sugarFree" >yes</span>
        <span v-if="!product.sugarFree" >no</span>
      </p>
      <p>Seasonal: <span v-if="product.seasonal" >yes</span>
        <span v-if="!product.seasonal" >no</span>
      </p>
      <p>Kosher: <span v-if="product.kosher" >yes</span>
        <span v-if="!product.kosher" >no</span>
      </p>
      <img :src="product.imageUrl" alt="image of product" width="200">
    </template>
    <template #footer>
      <p v-for="name in product.groupName" :key="name.id">{{name}}</p>
    </template>
  </pv-card>
</template>

<style scoped>
.product-card{
  text-align:center;
  background-color: #75cadb;
  margin: 10px auto;
  heigth: 100%;
  max-width: 100%;

}
.product-ingredients{
  background-color: #496d9b;
  border-radius:10px;
  color: white;
}
</style>