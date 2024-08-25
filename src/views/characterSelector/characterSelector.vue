<template>
  <div class="character-selector">
    <h1>Select Your Character, {{ userName}}</h1>
    <div class="characters">
      <div v-for="character in pjs" :key="character.name" class="character">
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
import {useRoute} from 'vue-router';

import {characters} from "@/components/scores/scores";

const pjs = characters

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
