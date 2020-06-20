import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { UserListComponent } from './components/application/user-list/user-list.component';
import { ProfileComponent } from './components/application/profile/profile.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { TaskManagerComponent } from './components/pages/task-manager/task-manager.component';


import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboradComponent,
    UserListComponent,
    ProfileComponent,
    MyAccountComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
