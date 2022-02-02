import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-manager',
  templateUrl: './vacation-manager.component.html',
  styleUrls: ['./vacation-manager.component.css']
})
export class VacationManagerComponent implements OnInit {

  images = [1].map((n) => `vacationManager/${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
