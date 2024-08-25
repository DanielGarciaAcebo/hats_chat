import {useRoute} from "vue-router";

export interface Scores {
    g: number;
    r: number;
    h: number;
    s: number;
}

export interface Answer {
    title: string;
    scores: Scores;
}

export interface Question {
    title: string;
    answers: Answer[];
}

export interface Character {
    name: string;
    image: string;
}