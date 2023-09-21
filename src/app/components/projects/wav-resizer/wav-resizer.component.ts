import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wav-resizer',
  templateUrl: './wav-resizer.component.html',
  styleUrls: ['./wav-resizer.component.css']
})
export class WavResizerComponent implements OnInit {
  images = [1].map((n) => `wavResizer/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
