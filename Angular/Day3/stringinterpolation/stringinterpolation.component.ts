import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

    name:string='Sumit Raokhande';
    flag:boolean=true;
    num1=3;
    num3=4;

    imgurl:string="../../assets/Desert.jpg";

    constructor() { }

  ngOnInit() {
  }

}
