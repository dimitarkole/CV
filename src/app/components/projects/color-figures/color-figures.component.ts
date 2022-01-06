import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-figures',
  templateUrl: './color-figures.component.html',
  styleUrls: ['./color-figures.component.css']
})
export class ColorFiguresComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `colorShapes/${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
