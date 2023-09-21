import { Component, OnInit } from '@angular/core';
import PortfolioProject from '../../shered/models/portfolioProject';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  powerpointPotfolioProjects: Array<PortfolioProject> = new Array<PortfolioProject>();
  aspNetPotfolioProjects: Array<PortfolioProject> = new Array<PortfolioProject>();
  arduinoPotfolioProjects: Array<PortfolioProject> = new Array<PortfolioProject>();
  algorithmsPotfolioProjects: Array<PortfolioProject> = new Array<PortfolioProject>();
  cPlusPlusPotfolioProjects: Array<PortfolioProject> = new Array<PortfolioProject>();
  vbPotfolioProjects: Array<PortfolioProject> = new Array<PortfolioProject>();
  phpPotfolioProjects: Array<PortfolioProject> = new Array<PortfolioProject>();
  constructor() { }

  ngOnInit(): void {
    // powerpoint
    let grandMotherChersTales: PortfolioProject = { name: "Grand mather chest tales", hasStar: true, image: "grandmothersFairyTales/1.jpg", link: "grandmothersFairyTales" };
    let colorFigures: PortfolioProject = { name: " Color figures", hasStar: true, image: "colorShapes/1.jpg", link: "colorFigures" };
    let mathHunterForFiveClass: PortfolioProject = { name: "Math hunter for five class", hasStar: true, image: "mathHunterForFiveClass/1.jpg", link: "mathHunterForFifthClass" };
    this.powerpointPotfolioProjects.push(grandMotherChersTales);
    this.powerpointPotfolioProjects.push(colorFigures);
    this.powerpointPotfolioProjects.push(mathHunterForFiveClass);

    // C# & Angular
    let elibrary: PortfolioProject = { name: "Elibrary", hasStar: false, image: "elibrary/1.jpg", link: "elibrary" };
    let fligthManager: PortfolioProject = { name: "Fligth manager", hasStar: true, image: "fligthManager/1.jpg", link: "fligthManager" };
    let vacationManager: PortfolioProject = { name: "Vacation manager", hasStar: false, image: "vacationManager/1.jpg", link: "vacationManager" };
    let musicHub: PortfolioProject = { name: "МusicHub", hasStar: true, image: "musicHub/1.jpg", link: "musicHub" };
    let musicHubShop: PortfolioProject = { name: "МmusicHubShop", hasStar: false, image: "musicHubShop/1.jpg", link: "musicHubShop" };
    let rentACar: PortfolioProject = { name: "Rent a car", hasStar: true, image: "rentACar/1.jpg", link: "rentACar" };
    let rossAuto: PortfolioProject = { name: "Ross auto", hasStar: true, image: "rossAuto/1.jpg", link: "rossAuto" };
    this.aspNetPotfolioProjects.push(elibrary);
    this.aspNetPotfolioProjects.push(fligthManager);
    this.aspNetPotfolioProjects.push(vacationManager);
    this.aspNetPotfolioProjects.push(musicHub);
    this.aspNetPotfolioProjects.push(musicHubShop);
    this.aspNetPotfolioProjects.push(rentACar);
    this.aspNetPotfolioProjects.push(rossAuto);

    // Arduino
    let dimSecuritySystem: PortfolioProject = { name: "Dim security System", hasStar: false, image: "dimSecuritySystem/1.jpg", link: "dimSecuritySystem" };
    this.arduinoPotfolioProjects.push(dimSecuritySystem);

    // algorithms
    let algorithms: PortfolioProject = { name: "Algorithms whit C#", hasStar: true, image: "algorithms/1.jpg", link: "algorithms" };
    this.algorithmsPotfolioProjects.push(algorithms);

    // VB
    let learningActivity: PortfolioProject = { name: "Learning activity", hasStar: false, image: "learningActivity/1.jpg", link: "learningActivity" };
    this.vbPotfolioProjects.push(learningActivity);

    // PHP
    let schoolCoder: PortfolioProject = { name: "School coder", hasStar: false, image: "schoolCoder/1.jpg", link: "schoolCoder" };
    this.phpPotfolioProjects.push(schoolCoder);

    // C/C++
    let hotelManager: PortfolioProject = { name: "Hotel manager", hasStar: false, image: "hotelManager/1.jpg", link: "hotelManager" };
    let eTable: PortfolioProject = { name: "ETable", hasStar: false, image: "eTable/1.jpg", link: "eTable" };
    let wavResizer: PortfolioProject = { name: "Wav Resizer", hasStar: false, image: "wavResizer/1.jpg", link: "wavResizer" };
    this.cPlusPlusPotfolioProjects.push(hotelManager);
    this.cPlusPlusPotfolioProjects.push(eTable);
    this.cPlusPlusPotfolioProjects.push(wavResizer);
  }

}
