import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { updateHoles, updateScore, updateTotalScore, updateCourseName, updateDate } from '../app.actions';
import { Holes } from '../shared/interfaces/hole.interface';
import { roundState } from '../shared/interfaces/round.interface';
import { selectCourseName, selectHoles} from '../app.reducer';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.sass']
})
export class ScorecardComponent {
  @Input() holes: number = 9 || 18;
  holesArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  roundData : Holes = {1: {par: 0, score: 0}, 2: {par: 0, score: 0}, 3: {par: 0, score: 0}, 4: {par: 0, score: 0},
  5: {par: 0, score: 0}, 6: {par: 0, score: 0}, 7: {par: 0, score: 0}, 8: {par: 0, score: 0},
  9: {par: 0, score: 0}, 10: {par: 0, score: 0}, 11: {par: 0, score: 0}, 12: {par: 0, score: 0}, 13: {par: 0, score: 0},
  14: {par: 0, score: 0}, 15: {par: 0, score: 0}, 16: {par: 0, score: 0}, 17: {par: 0, score: 0}, 18: {par: 0, score: 0}
  };
  selectedDate: Date = new Date();
  date: NgbDateStruct = { year: this.selectedDate.getFullYear(), month: this.selectedDate.getMonth() + 1, day: this.selectedDate.getDate()};
  @Input() courseName: string = "";
 
  constructor(private store: Store<roundState>, private router: Router) {
    this.updateRoundLength();
  }

  updateCompScore(hole: number, newScore: number) {
    this.roundData[hole].score = newScore;
  }

  updateParSelect(hole: number, newPar: number) {
    this.roundData[hole].par = newPar;
  }

  updateRoundLength() {
    if(this.holes == 18){
      this.holesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    }
    else{
      this.holesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  }
 
  updateStoreCourseName(courseName: string) {
    this.store.dispatch(updateCourseName({ courseName }));
  }

  updateStoreHoles(holes: number) {
    this.store.dispatch(updateHoles({ holes }));
  }
  updateStoreScore(score: Holes) {
    this.store.dispatch(updateScore({ score }));
  }
  updateStoreTotalScore(totalScore: number) {
    this.store.dispatch(updateTotalScore({ totalScore }));
  }
  updateStoreDate(date: string) {
    this.store.dispatch(updateDate({ date }));
  }

  onSubmit() {
    try {
      this.updateStoreScore(this.roundData);
      this.updateStoreCourseName(this.courseName);
      this.updateStoreHoles(this.holes);
      this.updateStoreDate(this.date.month.toString() + "/" + this.date.day.toString() + "/" + this.date.year.toString());
      this.router.navigate(['/score-submit']);
    }
    catch {
      console.log("Not Updated");
    }
  };
}
