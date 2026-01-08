<script setup>
import getApiService from "@/services/animal.service.js"
import { ref, onMounted, defineProps } from "vue";

const props = defineProps(['id']);

const animal = ref({})
const value = ref(null); //para rating
onMounted(async () => {
  const response = await getApiService.getAnimal(props.id);
  animal.value = response.data;

  console.log(animal.value);
})

</script>

<template>

  <pv-card class="card-animal" role="contentInfo" >

    <template #content >

      <h1>Name: {{animal?.name}}</h1>
      <img :src="animal?.image" alt="image of animal" width="200" height="200"/>
      <h1>Habitat: {{animal?.habitat}}</h1>
      <h1>Description: {{animal?.description}}</h1>
      <h1>Family: {{animal?.family}}</h1>

      <!--</template>
      <template #footer >
        <div class="card flex justify-content-center">
      <pv-rating class="rating-animal" v-model="value" :cancel="true"  />
          <h1 v-if="value">{{value}}.0</h1>
      </div>

    </template>-->

      <div class="card flex justify-content-center">
        <pv-rating class="rating-animal" v-model="value" :cancel="true">
          <template #cancelicon>
            <img src="https://primefaces.org/cdn/primevue/images/rating/cancel.png" height="24" width="24" alt=""/>
          </template>
          <template #onicon>
            <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" alt="" />
          </template>
          <template #officon>
            <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" alt="" />
          </template>
          <h1 v-if="value">{{value}}.0</h1>
        </pv-rating>
      </div>
    </template>
  </pv-card>

</template>

<style scoped>
.card-animal{
  background-color: #f5dc9c;
  padding: 0;
  text-align: center;
  max-width: 1280px;
  margin: 10px auto;
}
li{
  list-style: none;
}
.rating-animal{
  margin: auto;
  justify-content: center;
}

</style>