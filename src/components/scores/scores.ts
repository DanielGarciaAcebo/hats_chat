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
    { name: 'Pj1', image: 'https://i.imgur.com/YCUHvGh.png' },
    { name: 'Pj2', image: 'https://i.imgur.com/sfj7SEn.png' },
    { name: 'Pj3', image: 'https://i.imgur.com/XaJ4S4X.png' },
    { name: 'Pj4', image: 'https://i.imgur.com/9LyikPO.png' },
    { name: 'Pj5', image: 'https://i.imgur.com/7MGVPDA.png' },
]);