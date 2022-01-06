import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fligth-manager',
  templateUrl: './fligth-manager.component.html',
  styleUrls: ['./fligth-manager.component.css']
})
export class FligthManagerComponent implements OnInit {
  images = [1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `fligthManager/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
