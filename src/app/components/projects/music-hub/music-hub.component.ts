import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-hub',
  templateUrl: './music-hub.component.html',
  styleUrls: ['./music-hub.component.css']
})
export class MusicHubComponent implements OnInit {
  images = [1].map((n) => `musicHub/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
