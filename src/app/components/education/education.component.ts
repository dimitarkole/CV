import { Component, OnInit } from '@angular/core';
import Education from '../../shered/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Array<Education> = new Array<Education>();

  constructor() { }

  ngOnInit(): void {
    let telerikKidsAcademy: Education = { period: "Oct 2011 to June 2012", what: "Algorithms tasks with C++", where:"Telerik Kids Academy" }
    let cloudIT: Education = { period: "Aug to Sep 2016", what: "Cloud IT", where:"Minyu Balkanski" }
    let ppmg: Education = { period: "Sep 2016 to June 2021", what: "Speciality – Math, Informatics, English", where:"High school “Vasil Levski” – Smolyan" }
    let robotics: Education = { period: "Aug 2017", what: "Robotics", where:"Minyu Balkanski" }
    let itCarrier: Education = { period: "Oct 2018 to June 2021", what: "C# Developer", where:"National program Education for IТ Carrier" }
    let softuniCSharp: Education = { period: "Sep 2018 to Jan 2020", what: "C# Web Developer", where: "Software University" }
    let softuniDigitalMarketing: Education = { period: "Sep 2020 to Nov 2020", what: "Digital marketing", where: "Software University" }
    let SU: Education = { period: "Nov 2021 to June 2022", what: "Computer science", where: "Sofia University" }
    let TU: Education = { period: "Sep 2022 to present", what: "Cyber security", where: "Technical University" }
    this.educations.push(telerikKidsAcademy);
    this.educations.push(cloudIT);
    this.educations.push(ppmg);
    this.educations.push(robotics);
    this.educations.push(itCarrier);
    this.educations.push(softuniCSharp);
    this.educations.push(softuniDigitalMarketing);
    this.educations.push(SU);
    this.educations.push(TU);
  }
}
