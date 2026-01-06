<script>
import {Product} from "../models/product.entity.js";

export default {
  name: "product-card",
  props: {
    product: Product
  }
}
</script>

<template>
  <pv-card class="card">
    <template #title>
      <h2>{{product.title}}</h2>
    </template>
    <template #subtitle>
      <img :src="product.photoUrl" alt="product.title" />
    </template>
    <template #content>
      <p>{{product.description}}</p>
      <p>$ {{product.price.toFixed(2)}}</p>
      <pv-rating class="rating" :model-value="product.rating" :stars="5" :cancel="false" disabled></pv-rating>
    </template>
  </pv-card>
</template>

<style scoped>
.card{
  padding: 1rem;
  min-height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  text-align: center;
  margin-bottom: 10px;
}

.rating{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>