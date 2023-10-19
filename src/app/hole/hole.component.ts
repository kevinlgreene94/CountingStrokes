import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.sass']
})
export class HoleComponent {
  @Input() currentScore: number = 0;
  parSelect: string = '';

  increment() {
    this.currentScore++;
  }
  decrement() {
    if (this.currentScore > 0) {
      this.currentScore--;
    }
  }
}
