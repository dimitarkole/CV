import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-hunter-for-fifth-class',
  templateUrl: './math-hunter-for-fifth-class.component.html',
  styleUrls: ['./math-hunter-for-fifth-class.component.css']
})
export class MathHunterForFifthClassComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10].map((n) => `mathHunterForFiveClass/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
