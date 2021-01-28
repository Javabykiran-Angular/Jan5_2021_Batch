import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number=0;
  result1:number=0;
  myname:string='';

  username:string='';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(){
    console.log("Key Up Event Occurs!!");;

  }

  onKeyDown(){
    console.log("Key Down Event Occurs!!!");

  }

}
