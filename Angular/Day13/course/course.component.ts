import { Component, OnInit } from '@angular/core';
import { MyCourseService } from '../myCourse.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
course=[];

  constructor(private service:MyCourseService) { }

  ngOnInit() {
  //  let service=new MyCourseService();
   this.course= this.service.getCourseDetails();
  } 

  
}
