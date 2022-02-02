import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dim-security-system',
  templateUrl: './dim-security-system.component.html',
  styleUrls: ['./dim-security-system.component.css']
})
export class DimSecuritySystemComponent implements OnInit {
  images = [1].map((n) => `dimSecuritySystem/${n}.jpg`);
    
  constructor() { }

  ngOnInit(): void {
  }

}
