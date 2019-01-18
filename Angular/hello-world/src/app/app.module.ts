import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
