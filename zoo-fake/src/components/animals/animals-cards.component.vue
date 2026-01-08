<script setup>
import CardAnimal from "@/components/animals/card-animal.component.vue";
</script>

<template>
  <h1 class="animalcl">Animals</h1>
  <ul>
    <li v-for="i in 50" :key="i.id">
      <CardAnimal :id="i" role="contentinfo" />
    </li>
  </ul>

</template>

<style scoped>
.animalcl{
  text-align: center;
  color: #9ccdf5;
}
.card-animal{
  background-color: #92574B;
  padding: 0;
  text-align: center;
}
li{
  list-style: none;
}
.rating-animal{
  margin: auto;
  justify-content: center;
}

</style>