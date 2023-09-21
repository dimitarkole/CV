import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavResizerComponent } from './wav-resizer.component';

describe('WavResizerComponent', () => {
  let component: WavResizerComponent;
  let fixture: ComponentFixture<WavResizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavResizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
