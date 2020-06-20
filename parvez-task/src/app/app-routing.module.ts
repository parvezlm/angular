import { TaskManagerComponent } from './components/pages/task-manager/task-manager.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { ProfileComponent } from './components/application/profile/profile.component';
import { UserListComponent } from './components/application/user-list/user-list.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'dashboard', component:DashboradComponent, data: {title:'Dashboard'} },
  { path:'user-list', component:UserListComponent, data: {title:'User'} },
  { path:'profile', component:ProfileComponent, data: {title:'Profile'} },
  { path:'account', component:MyAccountComponent, data: {title:'Account'} },
  { path:'task-manager', component:TaskManagerComponent, data: {title:'Task Manager'} },
  { path:'', redirectTo:'user-list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
