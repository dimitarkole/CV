import { Component, OnInit } from '@angular/core';
import { IpService } from '../core/ip-service.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
  }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'Dimitar Kolev .net developer portfolio web site' },
      { name: 'author', content: 'Dimitar Kolev' },
      { name: 'keywords', content: 'Димитър Колев, Dimitar, Kolev, Dimitar Kolev, Angular, .Net, c# developer, Dimitar Kolev portfolio, developer, програмист' }
    ]);
  }

}
