<script setup>
import ApiProductService from "@/services/api-currency.service.js";
import {onMounted, ref, defineProps} from "vue";

const props = defineProps(['id']);

const currency = ref({})
const value = ref(null); //para rating

onMounted(async () => {
  const response = await ApiProductService.getCurrencyById(props.id);
  currency.value = response.data;
  console.log(currency.value)
})
</script>

<template>
 <pv-card class="p-card" role="contentinfo">
   <template #content>

     <h1>Name: {{currency?.name}}</h1>
     <img :src="currency?.image" alt="image of animal" width="200" height="200"/>
     <h1>Code: {{currency?.code}}</h1>
     <h1>Symbol: {{currency?.symbol}}</h1>
     <h1>Description: {{currency?.description}}</h1>

   </template>

   <template #footer>
     <div class="card flex justify-content-center">
       <pv-rating class="rating-animal" v-model="value" :cancel="true"  />
       <h1 v-if="value">{{value}}.0</h1>
     </div>

   </template>

 </pv-card>


</template>

<style scoped>
.p-card{
  text-align:center;
  background-color: cadetblue;
  color: black;
}
.p-rating{
  margin: auto;
  justify-content: center;
}

</style>