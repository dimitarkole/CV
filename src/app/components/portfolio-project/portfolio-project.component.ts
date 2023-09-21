import { Component, Input, OnInit } from '@angular/core';
import PortfolioProject from '../../shered/models/portfolioProject';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.css']
})
export class PortfolioProjectComponent implements OnInit {
  @Input() portfolioProject: PortfolioProject;


  constructor() { }

  ngOnInit(): void {
  }

}
