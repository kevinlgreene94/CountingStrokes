import { Component, OnInit } from '@angular/core';
import { selectScore, selectCourseName, selectHoles, selectDate } from '../app.reducer';
import { Observable, Subject, Subscription } from 'rxjs';
import { roundState } from '../shared/interfaces/round.interface';
import { Store } from '@ngrx/store';
import { Holes } from '../shared/interfaces/hole.interface';

@Component({
  selector: 'app-score-submit',
  templateUrl: './score-submit.component.html',
  styleUrls: ['./score-submit.component.sass']
})
export class ScoreSubmitComponent implements OnInit{
  score$: Holes = {};
  scoreSubscription: Subscription | undefined;
  courseName$: Observable<string>;
  courseName: string = "";
  roundDate$: Observable<string>;
  roundDate: string = "";
  holesSubscription: Subscription | undefined;
  totalStrokes = 0;
  totalPar = 0;
  totalScore = 0;
  holes: number = 0;
  orderedHoles: any = [];
  sortedKeys: any[] = [];
  private destroyed$ = new Subject<void>();
  
 
  constructor(private store: Store<roundState>) {
    this.roundDate$ = this.store.select(selectDate);
    this.courseName$ = this.store.select(selectCourseName);
  }

  ngOnInit() {
    this.scoreSubscription = this.store.select(selectScore).subscribe(data => {
      this.score$ = data as Holes;
      for (const hole in this.score$) {
        if (this.score$.hasOwnProperty(hole)) {
          this.totalPar += this.score$[hole].par;
          this.totalStrokes += this.score$[hole].score;
          this.totalScore += this.score$[hole].score - this.score$[hole].par;
          this.holes++;
        }
      }
      this.roundDate$.subscribe(data => {
        this.roundDate = data;
      });
      this.courseName$.subscribe(data => {
        this.courseName = data;
      });
      this.sortedKeys = Object.keys(this.score$).sort((a, b) => +a - +b);
    });
  } 

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onSubmit() {
    try {
      const golfRound: roundState = {
        courseName: this.courseName,
        holes: this.holes,
        score: this.score$ as Holes,
        date: this.roundDate,
        totalScore: this.totalScore,
        totalStrokes: this.totalStrokes,
      };
      const storedRoundsString: string | null = localStorage.getItem('rounds');
      let storedRounds: roundState[] = [];
      if(storedRoundsString){
        storedRounds = JSON.parse(storedRoundsString);
      }
      storedRounds.push(golfRound);
      localStorage.setItem('rounds', JSON.stringify(storedRounds));
      
    }
    catch {
      console.log("Error submitting score");
    }
  }
}
