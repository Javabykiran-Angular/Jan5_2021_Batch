import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myobj={
    name:'',
    id:0,
    role:''
  };
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap
    .subscribe((queryparam)=>{

      this.myobj.name=queryparam.get('name');
      this.myobj.id=+queryparam.get('id');
      this.myobj.role=queryparam.get('role');

    })

  }

}
