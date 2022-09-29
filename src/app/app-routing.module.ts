import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { PlotsComponent } from './pages/plots/plots.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/calendar',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'plants',
        component: PlantsComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'plots',
        component: PlotsComponent,
      },
      {
        path: 'forecast',
        component: ForecastComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
