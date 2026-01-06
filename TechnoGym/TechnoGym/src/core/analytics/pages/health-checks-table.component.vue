<script setup>
import { ref, onMounted } from 'vue'

import { FilterMatchMode } from 'primevue/api'

import { Center } from '@/core/analytics/models/center.entity.js'
import { Treadmill } from '@/core/analytics/models/treadmill.entity.js'
import { HealthCheck } from '@/core/analytics/models/health-check.entity.js'
import AnalyticsApiService from '@/core/analytics/services/analytics-api.service.js'

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const healthChecksTableData = ref([])

onMounted(loadData)

async function loadData() {
  try {
    const [centersResponse, treadmillsResponse] = await Promise.all([
      AnalyticsApiService.getCentersAndTheirTreadmills(),
      AnalyticsApiService.getTreadmillsAndTheirHealthChecks()
    ]);

    const centers = centersResponse.data.map(center => new Center(center));
    const treadmills = treadmillsResponse.data.map(treadmill => {
      const newTreadmill = new Treadmill(treadmill)
      newTreadmill.healthChecks = treadmill['health-checks'].map(healthCheck => new HealthCheck(healthCheck))
      return newTreadmill
    });

    // Map and combine data for the table
    healthChecksTableData.value = treadmills.flatMap(treadmill => {
      return treadmill.healthChecks.map(healthCheck => ({
          recordId: healthCheck.id,
          treadmillId: treadmill.id,
          serialNumber: treadmill.serialNumber,
          centerName: centers.find(center => center.id === treadmill.centerId)?.name,
          date: `${healthCheck.year}-${healthCheck.month.toString().padStart(2, '0')}-${healthCheck.day.toString().padStart(2, '0')}`,
          time: `${healthCheck.hour.toString().padStart(2, '0')}:${healthCheck.minutes.toString().padStart(2, '0')}:${healthCheck.seconds.toString().padStart(2, '0')}`,
          volts: healthCheck.volts,
          watts: healthCheck.watts,
          hp: healthCheck.hp
        })
      )
    })
  } catch (error) {
    console.error('Failed to load data:', error)
  }
}
</script>

<template>
  <div class="card m-3" role="region" aria-labelledby="healthChecksTable" aria-describedby="healthChecksDesc">
    <pv-datatable
      v-model:filters="filters" :value="healthChecksTableData"
      paginator :rows="5" :rowsPerPageOptions="[5, 10, 15]"
      showGridlines tableStyle="min-width: 50rem"
      role="grid" aria-multiselectable="false"
    >
      <template #header>
        <h1 id="healthChecksTable">Health Checks</h1>
        <p id="healthChecksDesc" class="visually-hidden">Table listing Health Check Records with pagination, sorting and filtering</p>
      </template>

      <div class="flex">
        <span class="p-input-icon-left" role="search">
            <i class="pi pi-search mr-2" aria-hidden="true"/>
            <pv-inputtext v-model="filters['global'].value" placeholder="Search" aria-label="Search urgencies"/>
        </span>
      </div>

      <pv-column field="recordId" header="Record Id" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="treadmillId" header="Treadmill Id" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="serialNumber" header="Serial Number" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="centerName" header="Center Name" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="date" header="Date" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="time" header="Time" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="volts" header="Volts" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="watts" header="Watts" sortable role="columnheader" aria-sort="none"></pv-column>
      <pv-column field="hp" header="HP" sortable role="columnheader" aria-sort="none"></pv-column>
    </pv-datatable>
  </div>
</template>

<style scoped>

</style>