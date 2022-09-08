<template lang="">
  <div id="map"></div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import { onMounted, watch } from 'vue' 
import { store } from "../store";

onMounted(() => {
  const leafMap = L.map('map', {    
    center: [51.505, -0.09],
    zoom: 12});

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(leafMap);
    const layerGroup = L.layerGroup().addTo(leafMap);

    watch(store, (newStore) => {
      if(newStore.locationData?.location) {
        layerGroup.clearLayers();
        const { lat, lng } = newStore.locationData.location
        L.marker([lat, lng]).addTo(layerGroup);
        leafMap.setView([lat, lng], 12);
        newStore.locationData = {}
      }
    })
});
</script>

<style scoped>
  div#map {
    height: 100%;
    width: 100%;
  }  
</style>