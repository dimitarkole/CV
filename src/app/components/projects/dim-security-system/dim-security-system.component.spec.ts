import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimSecuritySystemComponent } from './dim-security-system.component';

describe('DimSecuritySystemComponent', () => {
  let component: DimSecuritySystemComponent;
  let fixture: ComponentFixture<DimSecuritySystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimSecuritySystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimSecuritySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
