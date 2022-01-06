import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradma-chest-tales',
  templateUrl: './gradma-chest-tales.component.html',
  styleUrls: ['./gradma-chest-tales.component.css']
})
export class GradmaChestTalesComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].map((n) => `grandmothersFairyTales/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
