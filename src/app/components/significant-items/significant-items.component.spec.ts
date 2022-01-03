import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificantItemsComponent } from './significant-items.component';

describe('SignificantItemsComponent', () => {
  let component: SignificantItemsComponent;
  let fixture: ComponentFixture<SignificantItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignificantItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignificantItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
