import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-acar',
  templateUrl: './rent-acar.component.html',
  styleUrls: ['./rent-acar.component.css']
})
export class RentACarComponent implements OnInit {
  images = [1].map((n) => `rentACar/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
