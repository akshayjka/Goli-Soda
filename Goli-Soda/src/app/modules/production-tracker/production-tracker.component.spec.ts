import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTrackerComponent } from './production-tracker.component';

describe('ProductionTrackerComponent', () => {
  let component: ProductionTrackerComponent;
  let fixture: ComponentFixture<ProductionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
