import { Component, OnInit } from '@angular/core';
import { IpService } from '../core/ip-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ipService: IpService) {
    this.saveIpAddress();
  }

  saveIpAddress(): void {
    
    this.ipService.getIpAddress()
      .then(ipAddress => {  this.ipService.saveIpAddressToFile(ipAddress) })
      .catch(error => console.error('Error occurred while fetching the IP address:', error));
  }

  ngOnInit(): void {
    this.saveIpAddress();
  }

}
