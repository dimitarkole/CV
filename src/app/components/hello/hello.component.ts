import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  images = [1,2].map((n) => `personal${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
