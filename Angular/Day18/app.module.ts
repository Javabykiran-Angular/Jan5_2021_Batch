import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './summary.pipe';
import { CourseComponent } from './course/course.component';
import { MyCourseService } from './myCourse.service';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TDFComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EventBinding2Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    InbuildPipeComponent,
    CustompipeComponent,
    SummaryPipe,
    CourseComponent,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    MyfollowerComponent,
    QueryparameterComponent,
    NotfoundComponent,
    TDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyCourseService],
  // providers: [MyCourseService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
