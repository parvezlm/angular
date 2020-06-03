import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';


const appRoutes: Routes = [
{ path: 'home', component:ChildToParentComponent },
{ path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
