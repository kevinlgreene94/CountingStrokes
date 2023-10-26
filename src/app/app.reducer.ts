import { createReducer, on, createFeatureSelector } from '@ngrx/store';
import { updatePar, updateScore, updateTotalScore, updateTotalStrokes, updateCourseName, updateDate } from './app.actions';
import { createSelector } from '@ngrx/store';
import { roundState } from './shared/interfaces/round.interface';

    
export const initialState : roundState = {
    courseName: "Test Name",
    date: "Test Date",
    par: 0,
    score: {1: {par: 0, score: 0}, 2: {par: 0, score: 0}, 3: {par: 0, score: 0}, 4: {par: 0, score: 0},
    5: {par: 0, score: 0}, 6: {par: 0, score: 0}, 7: {par: 0, score: 0}, 8: {par: 0, score: 0},
    9: {par: 0, score: 0}},
    totalScore: 0,
    totalStrokes: 0
};
export const selectRoundState = createFeatureSelector<roundState>('roundState');

export const selectCourseName = createSelector(
  selectRoundState,
  (state: roundState) => state.courseName
);
export const selectPar = createSelector(
    selectRoundState,
    (state: roundState) => state.par
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
  on(updatePar, (state, {par}) => ({...state, par: par})),
  on(updateScore, (state, {score}) => ({...state, score: score})),
  on(updateTotalScore, (state, {totalScore}) => ({...state, totalScore: totalScore})),
  on(updateTotalStrokes, (state, {totalStrokes}) => ({...state, totalStrokes: totalStrokes})),
  on(updateCourseName, (state, {courseName}) => ({...state, courseName: courseName})),
  on(updateDate, (state, {date}) => ({...state, date: date}))
);