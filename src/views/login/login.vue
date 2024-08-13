<template>
  <div id="app">
    <div v-if="!isNameEntered">
      <h1>Welcome to the Sorting Hat Quiz</h1>
      <p>Please enter your name to begin:</p>
      <input v-model="userName" type="text" placeholder="Enter your name" />
      <button @click="submitName">Start
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import router from '@/router/index';
const userName = ref('');
const isNameEntered = ref(false);


function submitName() {
  if (userName.value.trim() !== '') {
    isNameEntered.value = true;
    router.push({ name: 'Character', params: { name: userName.value } });
  } else {
    alert('Please enter a valid name.');
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/login.scss";
</style>
