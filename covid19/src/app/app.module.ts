import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountryComponent } from './components/country/country.component';
import { CountryWiseDetailsComponent } from './components/country-wise-details/country-wise-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SummeryComponent } from './components/summery/summery.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountryComponent,
    CountryWiseDetailsComponent,
    HeaderComponent,
    SidebarComponent,
    SummeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
