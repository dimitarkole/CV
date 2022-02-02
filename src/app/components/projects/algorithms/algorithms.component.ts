import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {
  images = [1].map((n) => `algorithms/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
