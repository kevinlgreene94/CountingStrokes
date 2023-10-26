import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.sass']
})
export class HoleComponent {
  @Input() currentScore: number = 0;
  @Input() parSelect: number = 0;
  @Output() scoreChange = new EventEmitter<number>();
  @Output() parSelectChange = new EventEmitter<number>();

  increment() {
    this.currentScore++;
    this.scoreChange.emit(this.currentScore);
  }

  decrement() {
    if (this.currentScore > 0) {
      this.currentScore--;
      this.scoreChange.emit(this.currentScore);
    }
  }

  updateParSelect(value: number) {
    this.parSelect = value;
    this.parSelectChange.emit(this.parSelect);
  }
}
