<script setup>
import getApiService from '@/services/animal-service.js';
import { ref, onMounted } from 'vue';

let animals = ref([]);

onMounted(async () => {
  const response = await getApiService.getAllAnimals();
  animals.value = response.data;
});
</script>

<template>
  <ul>
    <li v-for="animal in animals">
      <pv-card>
        <template #content>
          <h1>{{ animal.name }}</h1>
        </template>
      </pv-card>
    </li>
  </ul>
</template>

<style scoped>

</style>