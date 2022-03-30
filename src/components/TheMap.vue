<template>
<div id="map">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="latLng" :min-zoom="8" :max-zoom="14" zoom-control="false" scroll-wheel-zoom="center" >
    <l-tile-layer
      :url="tileMapUrl"
    />
    <l-marker :lat-lng="latLng">
        <l-icon :icon-url="image" :icon-size="iconSize" />
      </l-marker>
  </l-map>
</div>
</template>
<script setup>
import { ref } from 'vue';
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import image from '../assets/images/icon-location.svg'

defineProps({
    latLng: Array,
});
const tileMapUrl = ref('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=36163038d7414377ba305a1b56ce9859');
const zoom = ref(10);
const iconSize = ref([42,48]);


</script>

<style scoped>

#map {
  height: 70vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
}

</style>
