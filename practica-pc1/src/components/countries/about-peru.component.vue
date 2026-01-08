<script setup>
  import {ref, onMounted} from "vue"
  import GetApiService from "@/services/GetApiService.js"
  import PvCard from '@/main.js'

  const country = ref({})

  onMounted(async (sync) => {
    const response = await GetApiService.getAll()
    country.value = response.data[0]
  })

</script>

<template>
  <pv-card role="article">
    <template #header>
      <img
        alt="Country flag"
        :src="country?.flags?.png"
      >
    </template>

    <template #title>{{country?.name?.common }}</template>
    <template #subtitle>{{country?.name?.official }}</template>
    <template #content>
      <p>{{country?.currencies?.PEN?.name}}} </p>
      <p>{{country?.currencies?.PEN?.symbol}}</p>
    </template>/

    <template #footer>
      <img
        alt="Country Coat of Arms"
        :src="country?.coatOfArms?.png"
        width="200px"
      />
    </template>

  </pv-card>
</template>

<style scoped>

</style>