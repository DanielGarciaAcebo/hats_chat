<template>
  <div class="chat-container">
    <div class="chat-window" ref="chatWindow">
      <div v-for="(question, index) in answeredQuestions" :key="index" class="chat-message bot" >
        <img src="/src/assets/images/hat/hat.jpg" alt="Bot Profile" class="profile-pic bot-pic">
        <p>{{ question.title }}</p>
        <img :src="pj.value.image" alt="User Profile" class="profile-pic user-pic">
        <p class="answer user">{{ answersSelected[index] }}</p>
      </div>
      <div v-if="currentQuestionIndex < questions.length" class="chat-message bot">
        <img src="/src/assets/images/hat/hat.jpg" alt="Bot Profile" class="profile-pic bot-pic">
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
  const url = "https://gist.githubusercontent.com/Xowap/b01fbce0c23971e23ab28427c09f92b3/raw/ad6399bd659679ff1f3209c2549a359d9cb744fd/sorting_hat.json";
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
        winningHouse.value = { value: "Gryffindor", img: "https://i.imgur.com/IU6Uy2n.png" };
        break;
      case "r":
        winningHouse.value = { value: "Ravenclaw", img: "https://i.imgur.com/kggGFMS.png" };
        break;
      case "h":
        winningHouse.value = { value: "Hufflepuff", img: "https://i.imgur.com/lcSZUOf.png" };
        break;
      case "s":
        winningHouse.value = { value: "Slytherin", img: "https://i.imgur.com/xeXvVnx.png" };
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
      image: 'https://i.imgur.com/6Qn3qCy.png'
    };
  }
}
</script>

<style scoped lang="scss">
 @import "@/assets/styles/chat.scss";
</style>
