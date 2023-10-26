import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { AppComponent } from './app.component';
import { ScoreSubmitComponent } from './score-submit/score-submit.component';

const routes: Routes = [
  { path: 'scorecard', component: ScorecardComponent },
  { path: 'score-submit', component: ScoreSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
