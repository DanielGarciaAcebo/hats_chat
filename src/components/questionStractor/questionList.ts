import axios from 'axios';
import {Question} from '../store/interfaces';



export function loadJSONData(url: string) {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            console.error('Failed to load JSON data:', error);
            return [];
        });
}
export function extractMessages(questions: Question[]): { question: Question }[] {
    return questions.map((question) => ({
        question: question
    }));
}

