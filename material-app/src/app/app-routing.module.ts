import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardGuard } from './auth-guard.guard';

const appRoute:Routes = [
 { path:'home', component:HomeComponent },
 { path:'login', component:LoginComponent },
 { path:'admin', component:AdminComponent, canActivate:[AuthGuardGuard]},
 { path:'course-details/:id', component:CourseDetailsComponent},
 { path:'', redirectTo:'home', pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
