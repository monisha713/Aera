import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepgadgetComponent } from './sleepgadget.component';

describe('SleepgadgetComponent', () => {
  let component: SleepgadgetComponent;
  let fixture: ComponentFixture<SleepgadgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepgadgetComponent]
    });
    fixture = TestBed.createComponent(SleepgadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
