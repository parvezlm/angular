import { CovidCaseStatusComponent } from './components/covid-case-status/covid-case-status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { SummeryComponent } from './pages/summery/summery.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';


const routes: Routes = [
  { path: 'home',component:HomeComponent},
  { path: 'country-list', component:CountriesListComponent},
  { path: 'summery', component:SummeryComponent},
  { path: 'countries-status', component:CovidCaseStatusComponent},
  { path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
