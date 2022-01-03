import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  allCertificatesGroups = [{
  "name": "Maths",
  "certificates": [{
    "name": "0.jpg",
    "info": "Easter math contest 2017 year",
    "additionInfo": "Second place",
  },
  {
    "name": "1.jpg",
    "info": "Christmas math contest 2016 year",
    "additionInfo": "Second place",
  },
  {
    "name": "2.jpg",
    "info": "Christmas math contest 2018 year",
    "additionInfo": "Second place",
  },
  {
    "name": "3.jpg",
    "info": "Perperikon math contest 2017 year",
    "additionInfo": "",
  },
  {
    "name": "4.jpg",
    "info": "Perperikon math contest 2018 year",
    "additionInfo": "",
  },
  {
    "name": "5.jpg",
    "info": "Perperikon math contest 2019 year",
    "additionInfo": "",
  },
  {
    "name": "6.jpg",
    "info": "Christmas math contest 2010 year",
    "additionInfo": "",
  },
  {
    "name": "7.jpg",
    "info": "Christmas math contest 2011 year",
    "additionInfo": "",
  },
  {
    "name": "8.jpg",
    "info": "Christmas math contest 2012 year",
    "additionInfo": "",
  },
    /*  {
          "name": " ",
          "info": " ",
          "additionInfo": " ",
      },*/
  ]
},
{
  "name": "IT",
  "certificates": [{
    "name": "1.jpg",
    "info": "Developing website with Jumla",
    "additionInfo": "",
  },
  {
    "name": "2.jpg",
    "info": "Lego Mindstorms",
    "additionInfo": "",
  },
  {
    "name": "3.jpg",
    "info": "STEM Day",
    "additionInfo": "",
  },
  {
    "name": "4.jpg",
    "info": "Meed and Code",
    "additionInfo": "",
  },
  {
    "name": "5.jpg",
    "info": "Diploma of NАT 'John Atanasoff' 2013",
    "additionInfo": "Second place",
  },
  {
    "name": "6.jpg",
    "info": "Reward of NАT 'John Atanasoff' 2013",
    "additionInfo": "Second place",
  },
  {
    "name": "7.jpg",
    "info": "Diploma of NАT 'John Atanasoff' 2014",
    "additionInfo": "Second place",
  },
  {
    "name": "8.jpg",
    "info": "Reward of NАT 'John Atanasoff' 2014",
    "additionInfo": "Second place",
  },
  {
    "name": "9.jpg",
    "info": "Diploma",
    "additionInfo": "",
  },
  {
    "name": "11.jpg",
    "info": "Uchimi 2019",
    "additionInfo": "",
  },
  {
    "name": "10.jpg",
    "info": "Uchimi 2020",
    "additionInfo": "",
  },
  ],
},
{
  "name": "Informatic",
  "certificates": [{
    "name": "1.jpg",
    "info": "Plovdiv 2012",
    "additionInfo": "",
  },

  {
    "name": "2.jpg",
    "info": "Diploma from Terelik Kids Academy",
    "additionInfo": "",
  },
  {
    "name": "4.jpg",
    "info": "Shumen 2012",
    "additionInfo": "",
  },
  {
    "name": "5.jpg",
    "info": "Yambol 2013",
    "additionInfo": "",
  },
  {
    "name": "3.jpg",
    "info": "Shumen 2013",
    "additionInfo": "",
  },
  {
    "name": "6.jpg",
    "info": "Shumen 2013",
    "additionInfo": "",
  },
  {
    "name": "8.jpg",
    "info": "Diploma from Terelik Kids Academy",
    "additionInfo": "",
  },
  {
    "name": "7.jpg",
    "info": "Veliko Tarnovo 2014",
    "additionInfo": "",
  },
  {
    "name": "9.jpg",
    "info": "Cloud IT",
    "additionInfo": "",
  },
  {
    "name": "10.jpg",
    "info": "Robotic",
    "additionInfo": "",
  },
  ]
},
{
  "name": "Sports",
  "certificates": [{
    "name": "1.jpg",
    "info": "Swimming",
    "additionInfo": "",
  },
  {
    "name": "2.jpg",
    "info": "Swimming",
    "additionInfo": "",
  },
  {
    "name": "3.jpg",
    "info": "Swimming",
    "additionInfo": "",
  },
  {
    "name": "4.jpg",
    "info": "Skiing",
    "additionInfo": "",
  },
  {
    "name": "5.jpg",
    "info": "Skiing",
    "additionInfo": "",
  },
  ]
}];

  constructor() { }

  ngOnInit(): void {
  }

}
