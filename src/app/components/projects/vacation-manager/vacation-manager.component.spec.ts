import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationManagerComponent } from './vacation-manager.component';

describe('VacationManagerComponent', () => {
  let component: VacationManagerComponent;
  let fixture: ComponentFixture<VacationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
