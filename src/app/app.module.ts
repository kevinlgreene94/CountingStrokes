import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { HoleComponent } from './hole/hole.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { golfRoundReducer } from './app.reducer';
import { ScoreSubmitComponent } from './score-submit/score-submit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    HoleComponent,
    HeaderComponent,
    ScoreSubmitComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ roundState: golfRoundReducer }),
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
