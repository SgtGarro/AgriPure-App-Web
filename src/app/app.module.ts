import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { PlansComponent } from './authentication/plans/plans.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { PlotsComponent } from './pages/plots/plots.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ForecastComponent,
    NotFoundComponent,
    PlantsComponent,
    PlotsComponent,
    DashboardComponent,
    LogInComponent,
    PlansComponent,
    RegisterFormComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
