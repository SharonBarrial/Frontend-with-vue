<script>

export default {
  name: "homepage"
}
</script>

<template>
  <div class="container">
    <div class="hero-image"></div>
    <h1 class="title">The perfect temperature, every time.</h1>
    <p class="description">Ember’s patented technology allows you to experience precision temperature control in your everyday life, with the vision to transform how the world eats, drinks, and lives, empowering you to experience your world without limits.</p>
  </div>
</template>

<style scoped>
.hero-image {
  background-image: url('https://ember.com/cdn/shop/files/230914_launch_WebBanner-Desktop_2048x.jpg');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 700px;
}

.title, .description {
  text-align: center;
  padding: 20px;
}

.title{
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 0;
  background: linear-gradient(to right, yellow, red);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description{
  margin: 0;
  font-size: 1.5rem;
  padding: 0 100px;
}

@media screen and (max-width: 768px){
  .hero-image {
    height: 300px;
  }

  .title{
    font-size: 2rem;
  }

  .description{
    font-size: 1rem;
    padding: 0 20px;
  }
}

</style>