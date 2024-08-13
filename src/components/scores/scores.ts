import { Scores, Answer } from '../store/interfaces';
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

export function getTotalScores(): Scores {
    return totalScores.value;
}


export function resetScores(): void {
    totalScores.value.g = 0
    totalScores.value.r = 0
    totalScores.value.h = 0
    totalScores.value.s = 0
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