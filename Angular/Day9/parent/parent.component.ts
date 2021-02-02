import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Data:string="Data From Parent...";

  jsonObj={
    fname:'Sumit',
    id:3,
    status:true
  }
  jsonObj1={
    fname:'Anuja',
    id:31,
    status:true
  }
  arrobj=[
    {
      fname:'sheela',
      id:3,
      status:true
    },
    {
      fname:'sumit',
      id:32,
      status:false
    },
    {
      fname:'Anuja',
      id:31,
      status:true
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
