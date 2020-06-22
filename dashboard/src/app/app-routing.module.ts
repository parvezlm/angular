import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProjectComponent } from './components/project/project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'applications', component:ApplicationsComponent },
  { path:'contact', component:ContactComponent },
  { path:'profile', component:ProfileComponent },
  { path:'project', component:ProjectComponent },
  { path:'', redirectTo:'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
