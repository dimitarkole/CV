import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibraryComponent } from './e-library.component';

describe('ELibraryComponent', () => {
  let component: ELibraryComponent;
  let fixture: ComponentFixture<ELibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
