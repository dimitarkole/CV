import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projectName: string = "";
  grandmothersFairyTales: string = "grandmothersFairyTales".toLowerCase();
  colorFigures: string = "colorFigures".toLowerCase();
  mathHunterForFifthClass: string = "mathHunterForFifthClass".toLowerCase();
  elibrary: string = "elibrary".toLowerCase();
  fligthManager: string = "fligthManager".toLowerCase();
  dimSecuritySystem: string = "dimSecuritySystem".toLowerCase();
  algorithms: string = "Algorithms".toLowerCase();
  vacationManager: string = "vacationManager".toLowerCase();
  musicHub: string = "musicHub".toLowerCase();
  musicHubShop: string = "musicHubShop".toLowerCase();
  rentACar: string = "rentACar".toLowerCase();
  eTable: string = "eTable".toLowerCase();
  hotelManager: string = "hotelManager".toLowerCase();
  rossAuto: string = "rossAuto".toLowerCase();
  wavResizer: string = "wavResizer".toLowerCase();
  
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.projectName = queryParams['project'] == undefined ? "" : queryParams['project'];
      this.projectName = this.projectName.toLowerCase();
    });
  }
}
