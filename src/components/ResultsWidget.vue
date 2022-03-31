<template>
<div class="results-container">
    <div class="results-row">
        <div class="results-column">
            <h6 class="results-category">IP Address</h6>
            <h3 class="results-value">{{ ipAddress  }}</h3>
        </div>
        <div class="results-column">
            <h6 class="results-category">Location</h6>
            <h3 class="results-value">{{ location }}</h3>
        </div>
        <div class="results-column">
            <h6 class="results-category">Timezone</h6>
            <h3 class="results-value">{{ timezone }}</h3>
        </div>
        <div class="results-column">
            <h6 class="results-category">ISP</h6>
            <h3 class="results-value">{{ isp }}</h3>
        </div>
    </div>
</div>
</template>
<script setup>
defineProps({
    ipAddress: String,
    location: String,
    timezone: String,
    isp: String,
})

</script>
<style scoped>
.results-container {
    position: absolute;
    top: 170px;
    z-index: 2;
    padding: 1.5rem 1rem;
    background: white;
    border-radius: 15px;
    -webkit-box-shadow: 3px 7px 27px 9px rgba(0,0,0,0.31); 
    box-shadow: 3px 7px 27px 9px rgba(0,0,0,0.31);;
}

.results-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.results-column {
    display: flex;
    flex-direction: column;
    min-width: 8rem;
    min-height: 4.5rem;
    padding: 0 1rem;
    border-right: 1px solid hsla(0, 0%, 59%, 0.418);
}

.results-column:first-child {
    padding: 0;
    padding-right: 1rem;
}
.results-column:last-child {
     border-right: none;
     padding: 0;
     padding-left: 1rem;
}

.results-category {
    text-transform: uppercase;
    color: hsl(0, 0%, 59%);
    font-size: 0.5rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
}

.results-value {
    padding: 0.5rem 0;
    max-width: 15rem;
    font-weight: 500;
}


 @media (max-width: 768px) {

     .results-container {
         margin: auto 1rem;
     }
    .results-row {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .results-column {
    border-right: none;
    height: unset;
    padding: 0;
    padding-bottom: 1rem;
    }

    .results-column:first-child {
    padding: 0;
    padding-bottom: 1rem;
}
.results-column:last-child {
     border-right: none;
     padding: 0;
     padding-bottom: 0;
}

.results-category {
    text-align: center;
}
.results-value {
    max-width: unset;
    text-align: center;
}
  }
</style>