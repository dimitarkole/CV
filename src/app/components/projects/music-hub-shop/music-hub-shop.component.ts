import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-hub-shop',
  templateUrl: './music-hub-shop.component.html',
  styleUrls: ['./music-hub-shop.component.css']
})
export class MusicHubShopComponent implements OnInit {
  images = [1].map((n) => `musicHubShop/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
