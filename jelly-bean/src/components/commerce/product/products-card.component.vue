<script setup>
import ProductCard from "@/components/commerce/product/product-card.component.vue";
</script>
<!-- Miguel Ybañez U20201B298
aqui importamos el productcard para poder enviarle el parametro id atravez de un v-for que hara iteracion
en conteo de los productos que contiene la API-->
<template>
  <ul>
    <li v-for="i in 9" :key="i.id">
      <ProductCard role="contentinfo" :id="i"/>
    </li>
  </ul>

</template>

<style scoped>
ul{
  text-decoration: none;
  align-items:center;
  max-width: 1480px;
  margin:auto;
}
li{
  list-style: none;
}

</style>