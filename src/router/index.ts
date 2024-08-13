import {createRouter, createWebHistory, useRoute} from 'vue-router'

import login from '@/views/login/login.vue'
import CharacterSelector from '@/views/characterSelector/characterSelector.vue'
import Chat from '@/views/chat/chat.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Login",
            component: login,
        },
        {
            path: '/character/:name',
            name: 'Character',
            component: CharacterSelector,
        },
        {
            path: '/chat/:name/:character',
            name: 'chat',
            component: Chat,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ],
});


export default router;
