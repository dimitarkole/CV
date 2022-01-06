import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradmaChestTalesComponent } from './gradma-chest-tales.component';

describe('GradmaChestTalesComponent', () => {
  let component: GradmaChestTalesComponent;
  let fixture: ComponentFixture<GradmaChestTalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradmaChestTalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradmaChestTalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
