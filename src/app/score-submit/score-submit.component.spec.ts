import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubmitComponent } from './score-submit.component';

describe('ScoreSubmitComponent', () => {
  let component: ScoreSubmitComponent;
  let fixture: ComponentFixture<ScoreSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreSubmitComponent]
    });
    fixture = TestBed.createComponent(ScoreSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
