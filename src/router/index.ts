import {createRouter, createWebHistory, useRoute} from 'vue-router'

import login from '@/views/login/login.vue'
import CharacterSelector from '@/views/characterSelector/characterSelector.vue'
import Chat from '@/views/chat/chat.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/hats_chat',
            name: "Login",
            component: login,
        },
        {
            path: '/hats_chat/character/:name',
            name: 'Character',
            component: CharacterSelector,
        },
        {
            path: '/hats_chat/chat/:name/:character',
            name: 'chat',
            component: Chat,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/hats_chat',
        },
    ],
});


export default router;
