import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-library',
  templateUrl: './e-library.component.html',
  styleUrls: ['./e-library.component.css']
})
export class ELibraryComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `elibrary/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
