import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathHunterForFifthClassComponent } from './math-hunter-for-fifth-class.component';

describe('MathHunterForFifthClassComponent', () => {
  let component: MathHunterForFifthClassComponent;
  let fixture: ComponentFixture<MathHunterForFifthClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathHunterForFifthClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathHunterForFifthClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
