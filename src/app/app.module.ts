import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NursesComponent } from './nurses/nurses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorsdashboardComponent } from './doctorsdashboard/doctorsdashboard.component';
import { NursedashboardComponent } from './nursedashboard/nursedashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorComponent,
    NursesComponent,
    DoctorsdashboardComponent,
    NursedashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
