import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { updatePar, updateScore, updateTotalScore, updateCourseName } from '../app.actions';
import { Holes } from '../shared/interfaces/hole.interface';
import { roundState } from '../shared/interfaces/round.interface';
import { selectCourseName} from '../app.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.sass']
})
export class ScorecardComponent {
  holes = [1,2,3,4,5,6,7,8,9];
  roundData : Holes = {1: {par: 0, score: 0}, 2: {par: 0, score: 0}, 3: {par: 0, score: 0}, 4: {par: 0, score: 0},
  5: {par: 0, score: 0}, 6: {par: 0, score: 0}, 7: {par: 0, score: 0}, 8: {par: 0, score: 0},
  9: {par: 0, score: 0},
  };
  selectedDate: Date = new Date();
  @Input() courseName: string = "";

  courseName$: Observable<string>;
 
  constructor(private store: Store<roundState>, private router: Router) {
    this.courseName$ = this.store.select(selectCourseName);
  }

  updateCompScore(hole: number, newScore: number) {
    this.roundData[hole].score = newScore;
  }

  updateParSelect(hole: number, newPar: number) {
    this.roundData[hole].par = newPar;
  }
 
  updateStoreCourseName(courseName: string) {
    this.store.dispatch(updateCourseName({ courseName }));
  }

  updateStorePar(par: number) {
    this.store.dispatch(updatePar({ par }));
  }
  updateStoreScore(score: Holes) {
    this.store.dispatch(updateScore({ score }));
  }
  updateStoreTotalScore(totalScore: number) {
    this.store.dispatch(updateTotalScore({ totalScore }));
  }

  onSubmit() {
    try {
      this.updateStoreScore(this.roundData);
      this.router.navigate(['/score-submit']);
      this.updateStoreCourseName(this.courseName);
      console.log(this.selectedDate.toString());
    }
    catch {
      console.log("Not Updated");
    }
  };
}
