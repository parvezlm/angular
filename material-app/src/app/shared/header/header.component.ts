import { AuthGuardService } from './../../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pathAdmin;
  isLoggedIn;
  constructor(private router:Router, private location:Location, private autservice:AuthGuardService) {
    this.router.events.subscribe(path => {
      if(this.location.path() !="") {
        this.pathAdmin = this.location.path();
      }
      if (this.location.path() == '/admin') {
        this.isLoggedIn = false;
      }else {
        this.isLoggedIn = true;
      }
    })
   }

  ngOnInit(): void {
  }

  logoutuser() {
    this.autservice.logoutuser();
  }
}
