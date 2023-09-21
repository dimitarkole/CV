import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RossAutoComponent } from './ross-auto.component';

describe('RossAutoComponent', () => {
  let component: RossAutoComponent;
  let fixture: ComponentFixture<RossAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RossAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RossAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
