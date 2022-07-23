import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-manager',
  templateUrl: './hotel-manager.component.html',
  styleUrls: ['./hotel-manager.component.css']
})
export class HotelManagerComponent implements OnInit {
  images = [1].map((n) => `hotelManager/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
