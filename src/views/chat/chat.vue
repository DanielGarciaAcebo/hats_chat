<template>
  <div class="chat-container">
    <div class="chat-window" ref="chatWindow">
      <div v-for="(question, index) in answeredQuestions" :key="index" class="chat-message bot" >
        <img src="/src/assets/images/hat/hat.webp" alt="Bot Profile" class="profile-pic bot-pic">
        <p>{{ question.title }}</p>
        <img :src="pj.value.image" alt="User Profile" class="profile-pic user-pic">
        <p class="answer user">{{ answersSelected[index] }}</p>
      </div>
      <div v-if="currentQuestionIndex < questions.length" class="chat-message bot">
        <img src="/src/assets/images/hat/hat.webp" alt="Bot Profile" class="profile-pic bot-pic">
        <p ref="questionText"></p>
        <div class="answers">
          <button v-for="(answer, answerIndex) in questions[currentQuestionIndex].answers"
                  :key="answerIndex"
                  :disabled="!allButtonsShown"
                  v-show="showButtons[answerIndex]"
                  @click="handleSelectAnswer(answer)">
            {{ answer.title }}
          </button>
        </div>
      </div>
      <div v-else class="house-winner-container">
        <div class="house-winner-pic">
          <img :src="winningHouse.img" :alt="winningHouse.value" class="house-img">
          <button @click="finishQuiz">Finish Quiz</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUpdated, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import {typingEffect} from "@/components/typing/typingEffect";
import router from '@/router/index';
import { loadJSONData } from "@/components/questionStractor/questionList";
import { Question, Answer, Character } from "@/components/store/interfaces";
import { addScores, getHouse } from "@/components/scores/scores";
import { characters} from "@/components/scores/scores";


const questions = ref<Question[]>([]);
const answeredQuestions = ref<Question[]>([]);
const answersSelected = ref<string[]>([]);
const currentQuestionIndex = ref(0);
const winningHouse = ref('');
const pj = ref<Character>
const questionText = ref<HTMLElement | null>(null);
const route = useRoute();
const chatWindow = ref<HTMLElement | null>(null);
const showButtons = ref<boolean[]>([]);
let finalQuestion = false
const allButtonsShown = ref(false)

const userName = route.params.name;
const selectedCharacter = route.params.character;

if (!userName || userName.length === 0 || !selectedCharacter || selectedCharacter.length === 0) {
  router.push({ name: 'Login' });
} else {
  buildCharacter(selectedCharacter);
  loadQuestions();
}


onMounted(() => {
  scrollToBottom();
  watchEffect(() => {
    typing()
  });
});

onUpdated(() => {
  scrollToBottom();
});

function typing() {
  if (questions.value.length > 0 && questionText.value && !finalQuestion ) {
    showButtons.value = new Array(questions.value[currentQuestionIndex.value].answers.length).fill(false);
    allButtonsShown.value = false;
    typingEffect(questionText.value, questions.value[currentQuestionIndex.value].title, 20, () => {
      questions.value[currentQuestionIndex.value].answers.forEach((_, index) => {
        setTimeout(() => {
          showButtons.value[index] = true;
          if (index === questions.value[currentQuestionIndex.value].answers.length - 1) {
            allButtonsShown.value = true;
          }
        }, index * 100);
      });
    });
  }
}

function loadQuestions() {
  const url = "@/assets/data/sorting_hat.json";
  loadJSONData(url)
      .then((message) => {
        questions.value = message;
      })
      .catch((error) => {
        console.error('Failed to load questions:', error);
      });
}

function finishQuiz() {
  router.push({ name: 'Login', params: {name: null, character: null} });
}

function handleSelectAnswer(answer: Answer) {
  addScores(answer.scores);
  answeredQuestions.value.push(questions.value[currentQuestionIndex.value]);
  answersSelected.value.push(answer.title);
  currentQuestionIndex.value++;

  if (currentQuestionIndex.value >= questions.value.length) {
    finalQuestion = true
    const winner = getHouse();
    switch (winner) {
      case "g":
        winningHouse.value = { value: "Gryffindor", img: "/hats_chat/src/assets/images/houses/Gryffindor.webp" };
        break;
      case "r":
        winningHouse.value = { value: "Ravenclaw", img: "/hats_chat/src/assets/images/houses/Ravenclaw.webp" };
        break;
      case "h":
        winningHouse.value = { value: "Hufflepuff", img: "/hats_chat/src/assets/images/houses/Hufflepuff.webp" };
        break;
      case "s":
        winningHouse.value = { value: "Slytherin", img: "/hats_chat/src/assets/images/houses/Slytherin.webp" };
        break;
      default:
        winningHouse.value = { value: "", img: "" };
        break;
    }
  }
}

function scrollToBottom() {
  if (chatWindow.value) {
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
  }
}
function buildCharacter(characterName: string) {
  const character = characters.value.find(char => char.name.toLowerCase() === characterName.toLowerCase());
  if (character) {
    pj.value = character;
  } else {
    pj.value = {
      name: 'Default',
      image: 'hats_chat/src/assets/images/mages/Pdefault.webp'
    };
  }
}
</script>

<style scoped lang="scss">
 @import "@/assets/styles/chat.scss";
</style>
