import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SouthIndianComponent } from './components/south-indian/south-indian.component';
import { HollywoodComponent } from './components/hollywood/hollywood.component';
import { BollywoodComponent } from './components/bollywood/bollywood.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';





const routes: Routes = [
  { path:'home', component:MoviesListComponent, data: {title:'Home'} },
  { path:'movie-details', component:MoviesDetailsComponent, data: {title:'About Movie'}},
  { path:'bollywood', component:BollywoodComponent, data: {title:'Bollywood'} },
  { path:'hollywood', component:HollywoodComponent, data: {title: 'Hollywood'} },
  { path:'south-indian', component:SouthIndianComponent, data: {title: 'South Indian'} },
  { path:'login', component:LoginComponent, data: {title:'Login'} },
  { path:'admin', component:DashboardComponent, data: {title:'Dashboard'}, canActivate: [AuthGuard]},
  { path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
