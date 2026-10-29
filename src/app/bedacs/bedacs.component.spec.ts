import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedacsComponent } from './bedacs.component';

describe('BedacsComponent', () => {
  let component: BedacsComponent;
  let fixture: ComponentFixture<BedacsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BedacsComponent]
    });
    fixture = TestBed.createComponent(BedacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
