<template>
<div class="form">
    <input class="inputField" v-model="input" type="text">
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
    padding: 0.5rem;
    border: none;
    height: 2rem;
}

.inputField {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}
.updateButton {
    background-color: black;
    color: white;
    padding: 0.25rem 1.5rem;
    height: 3rem;
    border: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
}

.updateButton:hover {
    background-color: hsl(0, 0%, 17%);
}
</style>