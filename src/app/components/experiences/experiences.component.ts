import { Expansion } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Experience from '../../shered/models/experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  experiences: Array<Experience> = new Array<Experience>();
  constructor() { }

  ngOnInit(): void {
    let grandmotherFairyTales: Experience = { name: "Grandmother fairy tales", description: "Five animated power point presentations", period: "2013", projectPage:"grandmothersFairyTales"}
    let colorFigures: Experience = { name: "Color figures", description: "Animated presentations with game", period: "2013-2014", projectPage:"colorFigures"}
    let mathHunterForFifthClass: Experience = { name: "Math hunter for fifth class", description: "Animated power point presentation with math calculator", period: "2014-2015", projectPage:"mathHunterForFifthClass"}
    let eLibry: Experience = { name: "ELibry", description: "ASP .Net Core - C# web platform", period: "2019-2020", projectPage:"elibrary"}
    let dimSecuritySystem: Experience = { name: "Dim Securety system", description: "Ardoino project", period: "2020", projectPage:"dimSecuritySystem"}
    let algorithms: Experience = { name: "Algorithms", description: "C# algorithms tasks", period: "2021", projectPage:"algorithms"}
    let fligthManager: Experience = { name: "Flight manager", description: "ASP .Net Core - C# web platform", period: "2021", projectPage:"fligthManager"}
    let vacationManager: Experience = { name: "Vacation manager", description: "ASP .Net Core - C# web platform", period: "2021", projectPage:"vacationManager"}
    let musicHub: Experience = { name: "Music hub", description: "ASP .Net Core - C# web platform", period: "2020-2022", projectPage:"musicHub"}
    let musicHubShop: Experience = { name: "MusicHub Shop", description: "ASP .Net Core - C# web platform", period: "2021", projectPage:"musicHubShop"}
    let rentACar: Experience = { name: "Rent a car", description: "ASP .Net Core - C# web platform", period: "2021", projectPage: "rentACar" }
    this.experiences.push(grandmotherFairyTales);
    this.experiences.push(colorFigures);
    this.experiences.push(mathHunterForFifthClass);
    this.experiences.push(eLibry);
    this.experiences.push(dimSecuritySystem);
    this.experiences.push(algorithms);
    this.experiences.push(fligthManager);
    this.experiences.push(vacationManager);
    this.experiences.push(musicHub);
    this.experiences.push(musicHubShop);
    this.experiences.push(rentACar);
  }
}
