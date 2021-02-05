import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  strdetails:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ipsam eum facere quasi distinctio rem saepe fugit laboriosam suscipit. In autem quis eligendi. Officia alias excepturi eaque ut! Expedita, non.";
  
  

  constructor() { }

  ngOnInit() {
  }

}
