import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFiguresComponent } from './color-figures.component';

describe('ColorFiguresComponent', () => {
  let component: ColorFiguresComponent;
  let fixture: ComponentFixture<ColorFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFiguresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
