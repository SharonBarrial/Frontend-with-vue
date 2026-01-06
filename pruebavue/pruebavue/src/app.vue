<script setup>

import TheHeader from './public/components/the-header.component.vue'

</script>

<template>
  <header>
    <TheHeader/>
    <div class="wrapper">
    <RouterView></RouterView>
    </div>
  </header>

  <main>

  </main>
</template>

<style scoped>

</style>
