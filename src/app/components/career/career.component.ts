import { Component, OnInit } from '@angular/core';
import Carier from '../../shered/models/carier';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  cariers: Array<Carier> = new Array<Carier>();

  constructor() { }

  ngOnInit(): void {
    let eurosys: Carier = { period: "14 May 2022 to present", what: ".Net & PHP & SQL", where: "Eurosys" }
    this.cariers.push(eurosys);
  }

}
