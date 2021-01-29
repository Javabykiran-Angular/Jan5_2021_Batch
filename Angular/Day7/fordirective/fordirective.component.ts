import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course=['Angular 8','React Js','Vue js','Embber Js','JSP'];

  arrobj=[
    {
      name:'Samsung',
      description:'Good',
      price:20000
    },
    {
      name:'Motorolla',
      description:'Best',
      price:21000
    },
    {
      name:'LG',
      description:'Lifes Good',
      price:30000
    },
    {
      name:'Apple',
      description:'Awsome',
      price:200000
    },
    {
      name:'One Plus+',
      description:'Better',
      price:30000
    }
  ];

  selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse event Occur!!!");
    this.selected=item.name;
  }
  onMouseOut(){
    this.selected='';
  }

}
