import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-table',
  templateUrl: './e-table.component.html',
  styleUrls: ['./e-table.component.css']
})
export class ETableComponent implements OnInit {
  images = [1].map((n) => `eTable/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
