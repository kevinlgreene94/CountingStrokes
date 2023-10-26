import { Component, OnInit } from '@angular/core';
import { selectScore, selectCourseName } from '../app.reducer';
import { Observable, Subject } from 'rxjs';
import { roundState } from '../shared/interfaces/round.interface';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators'; 
import { Holes } from '../shared/interfaces/hole.interface';

@Component({
  selector: 'app-score-submit',
  templateUrl: './score-submit.component.html',
  styleUrls: ['./score-submit.component.sass']
})
export class ScoreSubmitComponent implements OnInit{
  score$: Observable<Holes>;
  courseName$: Observable<string>;
  totalStrokes = 0;
  totalPar = 0;
  totalScore = 0;
  private destroyed$ = new Subject<void>();
 
  constructor(private store: Store<roundState>) {
    this.score$ = this.store.select(selectScore);
    this.courseName$ = this.store.select(selectCourseName);
  }
  
  ngOnInit() {
    this.score$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(score => {
        this.totalStrokes = Object.values(score).reduce((total, hole) => total + hole.score, 0);
      });
    this.score$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(par => {
        this.totalPar = Object.values(par).reduce((total, hole) => total + parseInt(hole.par, 10), 0);
      });
    this.totalScore = this.totalStrokes - this.totalPar;
  } 

  ngOnDestroy() {
    this.destroyed$.next(); // Emit a signal to unsubscribe
    this.destroyed$.complete(); // Complete the subject
  }

}
