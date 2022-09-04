<script setup>
import Input from './components/Input.vue';
import LocationData from './components/LocationData.vue';
import Map from './components/Map.vue';
</script>

<template>
  <header>
    <h1>IP Address Tracker</h1>
    <Input />
  </header>

  <main>
    <LocationData />
    <Map />
  </main>
</template>

<style scoped>
  header {
    padding-top: 2rem;
    background: url("@/assets/images/pattern-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  h1 {
    font-size: 2.5em;
  }
</style>
