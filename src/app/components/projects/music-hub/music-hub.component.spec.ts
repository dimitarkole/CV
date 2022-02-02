import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHubComponent } from './music-hub.component';

describe('MusicHubComponent', () => {
  let component: MusicHubComponent;
  let fixture: ComponentFixture<MusicHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
