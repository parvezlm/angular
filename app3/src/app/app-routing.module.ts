import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'about',component:AboutComponent },
  { path:'product', component:ProductComponent },
  { path:'contact', component:ContactComponent },
  { path:'products/:id', component:ProductDetailsComponent },
  { path:'employee-details/:id', component:EmployeeDetailsComponent},
  { path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
