<script setup>

</script>

<template>
  <pv-toolbar aria-label="Main Navigation Toolbar">
    <template #start>
      <h3 id="appTitle">TechnoGym TechnoRun Analytics</h3>
    </template>

    <template #end>
      <div class="flex flex-row gap-1">
        <router-link to="/home" aria-label="Navigate to Home">
          <pv-button>
            Home
          </pv-button>
        </router-link>

        <router-link to="/analytics/health-checks" aria-label="Navigate to Health Checks">
          <pv-button>
            Health Checks
          </pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>