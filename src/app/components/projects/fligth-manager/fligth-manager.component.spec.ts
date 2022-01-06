import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FligthManagerComponent } from './fligth-manager.component';

describe('FligthManagerComponent', () => {
  let component: FligthManagerComponent;
  let fixture: ComponentFixture<FligthManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FligthManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FligthManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
