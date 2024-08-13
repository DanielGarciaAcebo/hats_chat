<template>
  <div class="chat-container">

   <div class="chat-window" ref="chatWindow">
     <h1>Hello, {{ userName }}!</h1>
        <div v-for="(question, index) in answeredQuestions" :key="index" class="chat-message bot" >
          <p >{{ question.title }}</p>
          <p class="answer user">{{ answersSelected[index] }}</p>
        </div>
        <div v-if="currentQuestionIndex < questions.length" class="chat-message bot">
          <p>{{ questions[currentQuestionIndex].title }}</p>
          <div class="answers">
            <button v-for="(answer, answerIndex) in questions[currentQuestionIndex].answers"
                    :key="answerIndex"
                    @click="handleSelectAnswer(answer)">
              {{ answer.title }}
            </button>
          </div>
        </div>
        <div v-else class="chat-message bot">
          <h3>House with the most points: {{ winningHouse }}</h3>
          <button @click="finishQuiz">Finish Quiz</button>
        </div>
      </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useRoute } from 'vue-router';

import router from '@/router/index';
import { loadJSONData } from "@/components/questionStractor/questionList";
import { Question, Answer } from "@/components/store/interfaces";
import { addScores, getHouse } from "@/components/scores/scores";


const questions = ref<Question[]>([]);
const answeredQuestions = ref<Question[]>([]);
const answersSelected = ref<string[]>([]);
const currentQuestionIndex = ref(0);
const winningHouse = ref('');

const route = useRoute();
const chatWindow = ref<HTMLElement | null>(null);

const userName = route.params.name;

const selectedCharacter = route.params.character;

if (!userName || userName.length === 0 || !selectedCharacter || selectedCharacter.length === 0) {
  router.push({ name: 'Login' });
} else {
  loadQuestions();
}


onMounted(() => {
  scrollToBottom();
});

onUpdated(() => {
  scrollToBottom();
});

function loadQuestions() {
  const url = "/sorting_hat.json";
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
    const winner = getHouse();
    switch (winner) {
      case "g":
        winningHouse.value = "Gryffindor";
        break;
      case "r":
        winningHouse.value = "Ravenclaw";
        break;
      case "h":
        winningHouse.value = "Hufflepuff";
        break;
      case "s":
        winningHouse.value = "Slytherin";
        break;
      default:
        winningHouse.value = "";
        break;
    }
  }
}

function scrollToBottom() {
  if (chatWindow.value) {
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
  }
}
</script>

<style scoped lang="scss">
 @import "@/assets/styles/chat.scss";
</style>
