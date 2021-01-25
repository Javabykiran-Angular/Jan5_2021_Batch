import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string="red";
  rating:number=12;
  rating1:number=21;
  mycolor1:string="blue";
  mycolor2:string="yellow";

  obj={
   color :'white',
    fontStyle:'italic',
    "background-color":'brown'
  }

  constructor() { }

  ngOnInit() {
  }

}
