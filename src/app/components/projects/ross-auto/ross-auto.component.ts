import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ross-auto',
  templateUrl: './ross-auto.component.html',
  styleUrls: ['./ross-auto.component.css']
})
export class RossAutoComponent implements OnInit {
  images = [1].map((n) => `rossAuto/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
