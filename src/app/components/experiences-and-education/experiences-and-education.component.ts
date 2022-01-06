import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences-and-education',
  templateUrl: './experiences-and-education.component.html',
  styleUrls: ['./experiences-and-education.component.css']
})
export class ExperiencesAndEducationComponent implements OnInit {
  experiences: string = "experiences";
  education: string = "education";
  type: string = this.experiences;
  constructor() { }

  ngOnInit(): void {
  }

  viewExperiences() {
    this.type = this.experiences;
  }

  viewEducation() {
    this.type = this.education;
  }
}
