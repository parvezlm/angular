import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SportsComponent } from './sports/sports.component';


const appRoot: Routes = [
  { path:'sports', component:SportsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoot)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
