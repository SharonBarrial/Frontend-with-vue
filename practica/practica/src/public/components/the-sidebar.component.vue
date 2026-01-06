<script>
import { ref } from "vue";

export default {
  name: "the-sidebar",
  setup() {
    const visible = ref(false);

    return {
      visible
    };
  }
}

</script>

<template>
  <div class="card flex justify-content-center">
    <pv-sidebar class="sidebar" v-model:visible="visible" header="Ember Technologies">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/store/collections/all-drinkware"><li>Drinkware</li></router-link>
        <router-link to="/store/collections/accessories"><li>Accessories</li></router-link>
      </ul>
    </pv-sidebar>
    <pv-button class="sidebar-button" icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<style scoped>
.card{
  position: absolute;
  top: 1%;
  left: 1%;
}

.sidebar {
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px 0;
  border-bottom: 1px solid #dee2e6;
}

a{
  text-decoration: none;
  color: #495057;
}

a:hover{
  color: #212529;
}

li:hover {
  background-color: #e9ecef;
}

</style>