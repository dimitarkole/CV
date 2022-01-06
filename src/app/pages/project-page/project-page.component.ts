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

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(queryParams => {
      this.projectName = queryParams['project'] == undefined ? "" : queryParams['project'];
      this.projectName = this.projectName.toLowerCase();
    });
  }
}
