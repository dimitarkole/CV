import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesAndEducationComponent } from './experiences-and-education.component';

describe('ExperiencesAndEducationComponent', () => {
  let component: ExperiencesAndEducationComponent;
  let fixture: ComponentFixture<ExperiencesAndEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesAndEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesAndEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
