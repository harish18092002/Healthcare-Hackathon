import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorsdashboardComponent } from './doctorsdashboard/doctorsdashboard.component';
import { HomeComponent } from './home/home.component';
import { NursedashboardComponent } from './nursedashboard/nursedashboard.component';
import { NursesComponent } from './nurses/nurses.component';

const routes: Routes = [
   {
    path : '',
    component: AppComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'doctor',component : DoctorComponent},
      {path : 'nurse', component: NursesComponent},
      {path: 'docdashboard', component : DoctorsdashboardComponent},
      {path: 'nurdashboard',component: NursedashboardComponent},
      {path: '**', redirectTo: 'home'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
