<script>
import {University} from "../models/university.entity.js";

export default {
  name: "university-card",
  props: {
    university: {
      type: University,
      required: true
    }
  }
}
</script>

<template>
  <div class="card flex align-items-center justify-content-center m-4">
    <pv-card style="width: 24em" class="h-22rem">
      <template #title> {{ university.name }} </template>
      <template #subtitle> {{ university.country }} </template>
      <template #content>
        <ul>
          <li v-for="domain in university.domains">{{ domain }}</li>
        </ul>
      </template>
      <template #footer>
        <a :href=university.web_pages[0] target="_blank">
          <pv-button icon="pi pi-directions" label="Visit" />
        </a>
      </template>
    </pv-card>
  </div>
</template>

<style>

</style>