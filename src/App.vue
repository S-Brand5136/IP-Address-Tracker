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
    background: url("@/assets/images/pattern-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    
    color: #fff;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    padding-top: 2rem;
    width: 100%;
    height: 25%;
    text-align: center;
  }

  h1 {
    font-size: 2.15em;
  }

  main {
    height: 100%;
    width: 100%;
  }
</style>
