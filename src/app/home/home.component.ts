import { Component } from '@angular/core';
import { roundState } from '../shared/interfaces/round.interface';
import { updateScore } from '../app.actions';
import { Holes } from '../shared/interfaces/hole.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  storedRounds: roundState[] = localStorage.getItem('rounds') ? JSON.parse(localStorage.getItem('rounds') || '{}') : [];
  selectedRound: Holes = {}
  constructor(private store: Store<roundState>,) { 
    console.log(this.storedRounds);
  }
  onSubmit(id: number){
    this.selectedRound = this.storedRounds[id].score;
    this.updateStoreScore(this.selectedRound);
  }
  onDelete(id: number){
    if (confirm('Are you sure you want to delete this round?')) {
      this.storedRounds.splice(id, 1);
      localStorage.setItem('rounds', JSON.stringify(this.storedRounds));
      location.reload();
    }
  }
  updateStoreScore(score: Holes){
    this.store.dispatch(updateScore({ score }));
  }
}
