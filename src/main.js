import { createApp } from 'vue'
import App from './App.vue'
import router from "/src/router/index.ts";
import './assets/styles/main.scss';

createApp(App).use(router).mount('#app')

// Cargar dinámicamente todas las imágenes
const images = import.meta.glob('/src/assets/images/**/*.{jpg,jpeg,png,webp,gif}');

Object.keys(images).forEach((path) => {
    images[path]().then((module) => {
        console.log(`Loaded image: ${path}`);
    });
});
