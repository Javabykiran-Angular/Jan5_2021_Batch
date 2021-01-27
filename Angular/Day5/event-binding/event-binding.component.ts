
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
count:number=0;
result:number=0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.count==0){
      console.log("Event Occur!!");
      this.count++;
    }
   
  }

  onChange(){
    console.log("Change Event Occur!!!");

  }
  OnClick1(myevent){
    console.log("$Event is "+myevent);
    console.log(myevent);
    console.log("Value is "+myevent.target.value);
  }
  OnShowMe(myvalue){
    console.log("My Value is "+myvalue);
  }
  OnShowMe1(myinput){
    myinput.style.background="red";
  }

  OnAddition(num1Value,num2){
    let n1=+num1Value;
    let n2=+num2.value;
    console.log(n1+n2);
    this.result=n1+n2;
  }
}
