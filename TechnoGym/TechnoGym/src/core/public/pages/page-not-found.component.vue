<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const fullUrl = computed(() => `${window.location.origin}${route.path}`)
</script>

<template>
  <div class="mb-3 p-5 flex align-items-center justify-content-center" role="alert">
    <pv-card class="card" aria-labelledby="notFoundTitle" aria-describedby="notFoundDescription">
      <template #title>
        <h1 id="notFoundTitle">Ruta no encontrada</h1>
      </template>

      <template #subtitle>
        <p id="notFoundUrl">URL: {{ fullUrl }}</p>
      </template>

      <template #content>
        <div id="notFoundDescription">
          <p>Presione este boton para retonar:
            <router-link to="/home" aria-label="Volver a la página principal">
              <pv-button>
                Home
              </pv-button>
            </router-link>
          </p>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>