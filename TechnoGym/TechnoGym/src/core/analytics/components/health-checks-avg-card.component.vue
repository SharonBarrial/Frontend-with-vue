<script setup>
import { ref, onMounted } from 'vue'

import { HealthCheck } from '@/core/analytics/models/health-check.entity.js'
import AnalyticsApiService from '@/core/analytics/services/analytics-api.service.js'

const healthChecksAvgVolts = ref(0)
const healthChecksAvgWatts = ref(0)
const healthChecksAvgHP = ref(0)

onMounted(async () => {
  try {
    await getHealthChecksAvgValues()
  } catch (error) {
    console.error('Failed to fetch health checks:', error)
  }
})

async function getHealthChecksAvgValues() {
  const response = await AnalyticsApiService.getHealthChecks()
  const healthChecks = response.data
    .filter(healthCheck => healthCheck.hp > 0) // Filter out non-operational records
    .map( healthCheck => new HealthCheck(healthCheck))

  // Calculate averages
  const total = healthChecks.length
  if (total > 0) {
    const totalVolts = healthChecks.reduce((sum, item) => sum + item.volts, 0)
    const totalWatts = healthChecks.reduce((sum, item) => sum + item.watts, 0)
    const totalHP = healthChecks.reduce((sum, item) => sum + item.hp, 0)

    healthChecksAvgVolts.value = (totalVolts / total).toFixed(2)
    healthChecksAvgWatts.value = (totalWatts / total).toFixed(2)
    healthChecksAvgHP.value = (totalHP / total).toFixed(2)
  }
}
</script>

<template>
  <div class="flex justify-content-center m-3">
    <pv-card class="card" role="region" aria-labelledby="healthChecksAvgTitle" aria-describedby="healthChecksAvgDescription">
      <template #title>
        <h1 id="healthChecksAvgTitle">Average Performance</h1>
      </template>

      <template #content>
        <div id="healthChecksAvgDescription" role="contentinfo">
          <p aria-live="polite">Volts: {{ healthChecksAvgVolts }} V</p>
          <p aria-live="polite">Watts: {{ healthChecksAvgWatts }} W</p>
          <p aria-live="polite">HP: {{ healthChecksAvgHP }} HP</p>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>