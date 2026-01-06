<script>
import { useRoute } from 'vue-router';

export default {
  name: "page-not-found",
  setup() {
    const route = useRoute();
    return {
      routePath: route.path
    };
  }
}
</script>

<template>
  <div class="container">
    <div class="error-message">
      <h1>ERROR 404</h1>
      <h2>¡We're sorry!</h2>
      <p>'{{ routePath }}' doesn't exist</p>
    </div>
    <router-link to="/">
      <pv-button>Go Home</pv-button>
    </router-link>

  </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}

.error-message{
  text-align: center;
  margin-bottom: 16px;
}

h1{
  font-size: 4rem;
  color: red;
  font-weight: bolder;
}

h2{
  font-size: 2rem;
  font-weight: bold;
  margin-top: 32px;
}

p{
  font-size: 1.5rem;
}

@media screen and (max-width: 768px){
  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 1.5rem;
  }

  p{
    font-size: 1rem;
  }
}
</style>