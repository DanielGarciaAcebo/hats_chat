import { Scores, Character } from '../store/interfaces';
import {ref} from "vue";

const totalScores = ref<Scores>({
    g: 0,
    r: 0,
    h: 0,
    s: 0,
});
const actualAnswer = ref<string | null>(null);


export function addScores(scores: Scores): void {
    totalScores.value.g += scores.g;
    totalScores.value.r += scores.r;
    totalScores.value.h += scores.h;
    totalScores.value.s += scores.s;
}

export function getHouse(): string {
    const scores = totalScores.value;
    let maxScore = -1;
    let house = '';

    for (const key in scores) {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            house = key;
        }
    }

    return house;
}

export const characters = ref<Character[]>([
    { name: 'Pj1', image: 'hats_chat/src/assets/images/mages/Pj1.webp' },
    { name: 'Pj2', image: 'hats_chat/src/assets/images/mages/Pj2.webp' },
    { name: 'Pj3', image: 'hats_chat/src/assets/images/mages/Pj3.webp' },
    { name: 'Pj4', image: 'hats_chat/src/assets/images/mages/Pj4.webp' },
    { name: 'Pj5', image: 'hats_chat/src/assets/images/mages/Pj5.webp' },
]);