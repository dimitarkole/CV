import { Component, OnInit } from '@angular/core';
import Abilitie from '../../shered/models/abilitie';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  abilities: Array<Abilitie> = new Array<Abilitie>();
  
  constructor() { }

  ngOnInit(): void {
    let cSharp: Abilitie = { what:"C# & ASP .Net Core (MVC, Entity framework)", percent:100 }
    let angular: Abilitie = { what:"Angular (HTML & CSS & JavaScript)", percent:100 }
    let sql: Abilitie = { what: "MSSQL/SQL", percent:100 }
    let git: Abilitie = { what: "Git & GitHub & Azure Devops", percent:95 }
    let cPlusPlus: Abilitie = { what: "C/C++", percent:100 }
    let python: Abilitie = { what: "Python", percent: 80 }
    let arduino: Abilitie = { what: "Arduino & Lego Mindstorm", percent:100 }
    let vba: Abilitie = { what: "MS Office package  & VBA", percent:100 }
    let marketing: Abilitie = { what: "Digital market", percent: 30 }
    let cms: Abilitie = { what: "CSM systems - Joomla/WordPress", percent: 60 }

    this.abilities.push(cSharp);
    this.abilities.push(angular);
    this.abilities.push(sql);
    this.abilities.push(git);
    this.abilities.push(cPlusPlus);
    this.abilities.push(python);
    this.abilities.push(arduino);
    this.abilities.push(vba);
    this.abilities.push(marketing);
    this.abilities.push(cms);
  }
}
