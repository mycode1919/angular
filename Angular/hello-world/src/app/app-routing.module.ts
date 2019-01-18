import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeeComponent},
  { path: 'create', component: CreateEmployeeComponent},
  { path: '', redirectTo: '/create', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
