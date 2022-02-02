import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHubShopComponent } from './music-hub-shop.component';

describe('MusicHubShopComponent', () => {
  let component: MusicHubShopComponent;
  let fixture: ComponentFixture<MusicHubShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicHubShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicHubShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
