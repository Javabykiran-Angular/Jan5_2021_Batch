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
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
