import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManagerComponent } from './hotel-manager.component';

describe('HotelManagerComponent', () => {
  let component: HotelManagerComponent;
  let fixture: ComponentFixture<HotelManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
