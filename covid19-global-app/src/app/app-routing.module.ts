import { DailyTimeSummeryComponent } from './components/daily-time-summery/daily-time-summery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { SummeryComponent } from './pages/summery/summery.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountryWiseDataComponent } from './components/country-wise-data/country-wise-data.component';
import { CovidCaseStatusComponent } from './components/covid-case-status/covid-case-status.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent},
  { path: 'country-list', component:CountriesListComponent},
  { path: 'summery', component:SummeryComponent},
  { path: 'countries-status', component:CovidCaseStatusComponent},
  { path: 'country-wise-data/:name/:code', component:CountryWiseDataComponent},
  { path: 'date-wise-summery/:date',component:DailyTimeSummeryComponent},
  { path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
