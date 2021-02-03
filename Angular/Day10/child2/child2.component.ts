import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childevent=new EventEmitter();

  childStr:string="Data from Child...";

  @Output() childEvent1=new EventEmitter();
  
  Childarrobj=[
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
  onclick(){
    // this.childevent.emit(this.childStr);
    this.childEvent1.emit(this.Childarrobj);
  }

}
