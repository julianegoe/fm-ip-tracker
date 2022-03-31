<template>
<div class="form">
    <input class="inputField" v-model="input" type="text" placeholder="Search for any IP address or domain">
    <button class="updateButton" @click="updateValue">
        <img src="../assets/images/icon-arrow.svg">
    </button>
</div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['update:modelValue']);
defineProps(['modelValue']);

const input = ref('');

const updateValue = () => {
    emit('update:modelValue', input.value)
};

</script>
<style scoped>

.inputField, .updateButton {
    margin: 0;
    padding: 0.5rem 0.75rem;
    border: none;
    height: 1.5rem;
    font-size: 0.75rem;
}

.inputField {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 20rem;
}
.updateButton {
    background-color: black;
    color: white;
    padding: 0.25rem 1rem;
    height: 2.5rem;
    border: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
}

.updateButton:hover {
    background-color: hsl(0, 0%, 17%);
}

 @media (max-width: 768px) {
     .inputField {
         width: 12rem;
     }
 }
</style>