<script >
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}

</script>

<template>
<pv-toolbar>
  <template #start>
    <img src="../../assets/images/HIGNlogo.png" alt="logo" width="100px"/>
  </template>
  <template #center >
    <pv-button label="EN" @click="changeLanguage('en')" severity="secondary" text raised ></pv-button>
    <pv-button label="ES" @click="changeLanguage('es')" severity="secondary" text raised ></pv-button>
  </template>
  <template #end>
    <div class="buttons">
      <RouterLink to="/home"><pv-button label="Home" severity="info" raised /></RouterLink>
      <RouterLink to="/nursing/mental-state-exams"><pv-button label="Exams" severity="info" raised /></RouterLink>
    </div>

  </template>
</pv-toolbar>
</template>

<style scoped>
.buttons{
  display: flex;
  gap:10px;
}
</style>