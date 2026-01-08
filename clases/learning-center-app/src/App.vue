<script setup>
</script>

<template>
  <main>
    <button>Click me!</button>
    <pv-calendar />
    <pv-rating />
    <pv-input-text />

    <pv-input-mask id="basic"  mask="99-999999" placeholder="99-999999" />

    <div> {{ $t('hello') }}</div>
    <div> {{ $t('hello') }}</div>

    <!-- para números se pone 9999 y para serapar digitos con - y 999 -->
    <!-- Para números y digitos:<pv-input-mask id="basic"  mask="9999-999" :placeholder="9999-999" />-->
    <!-- Para letras o letras mayusculas:<pv-input-mask id="basic"  mask="A" :placeholder="$t('greet',{ user:'Pedro'})" />-->
    <!-- Para letras o letras minusculas:<pv-input-mask id="basic"  mask="Aa" :placeholder="$t('greet',{ user:'Pedro'})" />-->
    <!-- Para cantidad de digitos:<pv-input-mask id="basic"  mask="[a-z]{2-30}" :placeholder="solo letras" />-->
    <pv-input-mask id="basic"  mask="aaaaaaa" :placeholder="$t('greet',{ user:'Pedro'})" />



    <div> {{ $t('hello') }}</div>
    <div> {{ $t('greet',{ user:'Pedro'}) }}</div>

    <label for="name">Name</label>
    <pv-input-text id="name" />

    <img src="./assets/logo.svg" width="50" height="25" alt="brand icon"/>
    <pv-button label="Click me" :aria-label="$t('greet',{ user:'Pedro'})"/>
  </main>
</template>

<style scoped>
main{
  background-color:red;
}
</style>