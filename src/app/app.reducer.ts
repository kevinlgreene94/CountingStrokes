import { createReducer, on, createFeatureSelector } from '@ngrx/store';
import { updateHoles, updateScore, updateTotalScore, updateTotalStrokes, updateCourseName, updateDate } from './app.actions';
import { createSelector } from '@ngrx/store';
import { roundState } from './shared/interfaces/round.interface';

    
export const initialState : roundState = {
    courseName: "",
    date: "",
    holes: 0,
    score: {},
    totalScore: 0,
    totalStrokes: 0
};
export const selectRoundState = createFeatureSelector<roundState>('roundState');

export const selectCourseName = createSelector(
  selectRoundState,
  (state: roundState) => state.courseName
);
export const selectHoles = createSelector(
    selectRoundState,
    (state: roundState) => state.holes
);

export const selectScore = createSelector(
    selectRoundState,
    (state: roundState) => state.score
);

export const selectDate = createSelector(
    selectRoundState,
    (state: roundState) => state.date
);

export const selectTotalScore = createSelector(
    selectRoundState,
    (state: roundState) => state.totalScore
);  

export const selectTotalStrokes = createSelector(
  selectRoundState,
  (state: roundState) => state.totalStrokes
);

export const golfRoundReducer = createReducer(
  initialState,
  on(updateHoles, (state, {holes}) => ({...state, holes: holes})),
  on(updateScore, (state, {score}) => ({...state, score: score})),
  on(updateTotalScore, (state, {totalScore}) => ({...state, totalScore: totalScore})),
  on(updateTotalStrokes, (state, {totalStrokes}) => ({...state, totalStrokes: totalStrokes})),
  on(updateCourseName, (state, {courseName}) => ({...state, courseName: courseName})),
  on(updateDate, (state, {date}) => ({...state, date: date}))
);