<script setup>
import CurrencyCard from '@/components/currencies/currency-card.component.vue';
</script>

<template>
  <h1>Currencies List</h1>
  <ul>
    <li v-for="i in 10" :key="i.id">
      <CurrencyCard :id="i"/>
    </li>
  </ul>
</template>

<style scoped>
h1{
  text-align: center;
  color: white;
}
li{
  list-style: none;
}

</style>