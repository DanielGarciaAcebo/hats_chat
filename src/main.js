import { createApp } from 'vue'
import App from './App.vue'
import router from "/src/router/index.ts";
import './assets/styles/main.scss';

createApp(App).use(router).mount('#app')