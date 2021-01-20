import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string='Sumit';
  imgurl:string="../../assets/Desert.jpg";
  ishidden:boolean=false;
  ishidden_btn:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
