import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SummeryComponent } from './components/summery/summery.component';
import { CountryWiseDetailsComponent } from './components/country-wise-details/country-wise-details.component';
import { CountryComponent } from './components/country/country.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';




const appRoutes: Routes = [
  { path:'dashboard', component:DashboardComponent, data: {title:'Dashboard'} },
  { path:'countries', component:CountryComponent, data: {title:'Countries'} },
  { path:'countries-list', component:CountriesListComponent, data: {title:'Countries List'}},
  { path:'country-wise-details/:name/:code', component:CountryWiseDetailsComponent, data: {title:'Country Details'} },
  { path:'summery', component:SummeryComponent, data: {title:'Summery'} },
  { path:'', redirectTo:'dashboard', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
