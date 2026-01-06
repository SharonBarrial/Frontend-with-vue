<script>
import {FilterMatchMode} from "primevue/api";

export default {
  name: "notification-table",
  props: {
    items: Array,
    columns: Array
  },
  data() {
    return {
      selectedItems: Array,
      filters: null
    }
  },
  created() {
    this.initFilters();
  },
  methods: {
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },
    newItem() {
      this.$emit('new-item');
    },
    fixedColumnHeader(header) {
      let fixedHeader = header.replace(/([A-Z])/g, ' $1');
      return fixedHeader.charAt(0).toUpperCase() + fixedHeader.slice(1);
    }
  }
}
</script>

<template>
  <pv-data-table
      :paginator="true"
      :value="items"
      :filters="filters"
      dataKey="id"
      :rows="5"
      :rows-per-page-options="[5, 10, 20]"
      :current-page-report-template="'Showing {first} to {last} of {totalRecords} entries'"
      tableStyle="min-width: 50rem"
  >
    <template #header>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Notifications</span>
        <pv-button icon="pi pi-refresh" rounded raised/>
      </div>
    </template>
    <pv-column v-for="column in columns"
               :field="column"
                :key="column"
               :header="fixedColumnHeader(column)" sortable></pv-column>
    <slot name="notification-columns"></slot>
    <template #footer>En total hay {{ items ? items.length : 0 }}</template>
  </pv-data-table>
</template>