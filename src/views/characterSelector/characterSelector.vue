<template>
  <div class="character-selector">
    <h1>Select Your Character, {{ userName}}</h1>
    <div class="characters">
      <div v-for="character in characters" :key="character.name" class="character">
        <img :src="character.image" :alt="character.name" />
        <button @click="selectCharacter( character.name)">Select {{ character.name }}</button>
      </div>
    </div>
    <div v-if="selectedCharacter">
      <h2>You selected: {{ selectedCharacter }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router/index';
import {useRoute} from 'vue-router'

const characters = ref([
  { name: 'Pj1', image: 'path/to/image1.png' },
  { name: 'Pj2', image: 'path/to/image2.png' },
  { name: 'Pj3', image: 'path/to/image3.png' },
  { name: 'Pj4', image: 'path/to/image4.png' },
  { name: 'Pj5', image: 'path/to/image5.png' },
]);

const route = useRoute();
const userName = route.params.name;
const selectedCharacter = ref<string | null>(null);

function selectCharacter( characterName: string) {
  selectedCharacter.value = characterName;
  router.push({ name: 'chat', params: { name: userName, character: characterName } });
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/character.scss";
</style>
