import { createAction, props } from '@ngrx/store';
import { Holes } from './shared/interfaces/hole.interface';

export const updateCourseName = createAction("[Scorecard Component] Update Course Name", props<{courseName: string}>());
export const updateDate = createAction("[Scorecard Component] Update Date", props<{date: string}>());
export const updateHoles = createAction("[Scorecard Component] Update Par", props<{holes: number}>());
export const updateScore = createAction("[Scorecard Component] Update Score", props<{score: Holes}>());
export const updateTotalScore = createAction("[Scorecard Component] Update Total Score", props<{totalScore: number}>());
export const updateTotalStrokes = createAction("[Scorecard Component] Update Total Strokes", props<{totalStrokes: number}>());