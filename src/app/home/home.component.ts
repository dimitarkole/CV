import { Component, OnInit } from '@angular/core';
import { IpService } from '../core/ip-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ipService: IpService) {
  }

  ngOnInit(): void {
  }

}
