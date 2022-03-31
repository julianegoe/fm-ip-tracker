<template>
<div class="control-unit">
  <h1 class="app-name">IP Address Tracker</h1>
  <TheInput v-model="input"/>
  <p class="error-message">{{ errorMessage }}</p>
</div>
<div class="results-unit">
  <ResultsWidget :ip-address="ipAddress" :location="location" :timezone="timezone" :isp="isp" />
</div>
<TheMap :lat-lng="latLng" />
</template>
<script setup>
import { ref, watch, computed } from 'vue';
import TheMap from './components/TheMap.vue';
import TheInput from './components/TheInput.vue';
import ResultsWidget from './components/ResultsWidget.vue';
import { getIpData } from './services/RequestService.js';

const input = ref('');
const results = ref();
const errorMessage = ref('');
const ipAddress = computed(() => {
  if (results.value) {
    return results.value.ip;
  } return '--';
});
const location = computed(() => {
  if (results.value) {
    return `${results.value.location.city}, ${results.value.location.region}, ${results.value.location.postalCode}`;
  } return '--';
});
const timezone = computed(() => {
  if (results.value) {
    return `UTC ${results.value.location.timezone}`;
  } return '--';
});
const isp = computed(() => {
  if (results.value) {
    return results.value.isp;
  } return '--';
})
const latLng = computed(() => {
  if (results.value) {
    return [results.value.location.lat, results.value.location.lng] 
  } return [47.41322, -1.219482]
})
watch(input, async () => {
  const result = await getIpData(input.value);
  errorMessage.value = '';
  if (!result.code) {
      results.value = result;
  } else {
    errorMessage.value = `Error ${result.code}: ${result.messages}`
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.control-unit {
  height: 250px;
  background: #ffffff url("./assets/images/pattern-bg.png") no-repeat right top;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.app-name {
  margin-top: 2rem;
  padding-bottom: 1rem;
  color: white;
  font-weight: 500;
}

.results-unit {
  display: flex;
  justify-content: center;
}

.error-message {
  color: red;
  background-color: white;
  font-size: 0.75rem;
  margin: 0.25rem;
}
</style>
