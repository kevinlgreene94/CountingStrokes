import { Holes } from './hole.interface';

export interface roundState {
    courseName: string;
    date: string;
    holes: number;
    score: Holes;
    totalScore: number;
    totalStrokes: number;
}