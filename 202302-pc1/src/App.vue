<script>
import {defineComponent} from "vue";
import UniversitiesList from "./universities/pages/universities-list.component.vue";

export default defineComponent({
components: {UniversitiesList}
})
</script>

<template>
  <pv-toolbar>
    <template #start>
      <h1 class="text-blue-600 text-lg">Hipo University API Showcase</h1>
    </template>
    <template #end>
      <pv-button icon="pi pi-search" class="mr-2" />
      <pv-button icon="pi pi-calendar" severity="success" class="mr-2" />
      <pv-button icon="pi pi-times" severity="danger" />
    </template>
  </pv-toolbar>
  <universities-list />
  <footer>
    <div class="text-center bg-blue-100 p-4">
      <h1>Copyright © 2023 Hipo, inc All rights reserved</h1>
      <p>Developed by <span class="font-bold text-blue-600">Choclitos</span></p>
    </div>
  </footer>
</template>

<style>
</style>
