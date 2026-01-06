<script>
import { CollectionService } from "../services/collection.service.js";
import { Product } from "../models/product.entity.js";
import ProductCard from "../components/product-card.component.vue";

export default {
  name: "accessories-view",
  components: {ProductCard},
  data() {
    return {
      products: [],
      collectionService: new CollectionService(),
    };
  },
  created() {
    this.collectionService.getProducts(2).then(response => {
      this.products = response.data.map(product => new Product(product.id, product.title, product.description, product.photoUrl, product.price, product.collectionId, product.rating));
    });
  }
}
</script>

<template>
  <div class="container">
    <h1>Accessories</h1>
    <div class="products">
      <div v-for="product in products" :key="product.id">
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container h1{
  text-align: center;
  font-size: 3rem;
}

.products{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 1rem;
}

@media screen and (max-width: 450px) {
  .products{
    grid-template-columns: 1fr;
  }
}
</style>