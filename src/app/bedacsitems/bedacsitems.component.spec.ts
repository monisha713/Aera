import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedacsitemsComponent } from './bedacsitems.component';

describe('BedacsitemsComponent', () => {
  let component: BedacsitemsComponent;
  let fixture: ComponentFixture<BedacsitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BedacsitemsComponent]
    });
    fixture = TestBed.createComponent(BedacsitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
