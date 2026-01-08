<script>
import UniversityCard from "../components/university-card.component.vue";
import UniversityApiService from "../services/universities.servicies.hs.js";

export default {
  name: "universities-list",
  components: {UniversityCard},
  data(){
    return{
      universityApi: new UniversityApiService(),
      universities: []
    }
  },
  created(){
    this.universityApi.getUniversities()
      .then(response => this.universities = response.data)
      .catch(error =>{
        this.universities.push("Oh no hay un error aca: ", error)
      })
  }
}
</script>

<template>
  <div class="flex justify-content-center flex-wrap">
    <university-card
      v-for="university in universities"
      :university="university" />
  </div>
</template>

<style>

</style>