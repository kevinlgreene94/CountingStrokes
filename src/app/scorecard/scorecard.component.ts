import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.sass']
})
export class ScorecardComponent {
  holes = [1,2,3,4,5,6,7,8,9];
  roundData = {holeOne: {par: 0, score: 0}, holeTwo: {par: 0, score: 0}, holeThree: {par: 0, score: 0}, holeFour: {par: 0, score: 0},
  holeFive: {par: 0, score: 0}, holeSix: {par: 0, score: 0}, holeSeven: {par: 0, score: 0}, holeEight: {par: 0, score: 0},
  holeNine: {par: 0, score: 0}
};

  onSubmit() {
    console.log(this.roundData);
  }
}
