import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { ChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { SummeryComponent } from './pages/summery/summery.component';
import { CovidCaseStatusComponent } from './components/covid-case-status/covid-case-status.component';
import { DailyTimeSummeryComponent } from './components/daily-time-summery/daily-time-summery.component';
import { CountryWiseDataComponent } from './components/country-wise-data/country-wise-data.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesListComponent,
    SummeryComponent,
    CovidCaseStatusComponent,
    DailyTimeSummeryComponent,
    CountryWiseDataComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
