import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { CommonTasksService } from './../../services/common-tasks.service';
import { AuthGuardService } from './../../services/auth-guard.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  heading;
  hidelogin;
  hidelogout;
  notoggle;
  
  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private commoTask: CommonTasksService,
    private authguard:AuthGuardService
    ) { }

  ngOnInit(): void {
    this.getPathName();
  }


  toggle() {
    this.commoTask.toggle();
  }

  //change header title
  getPathName() {
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if(child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        
      })
      ).subscribe(title => {
        this.heading = title;

        if(localStorage.getItem('username') == null) {
          this.hidelogout = false;
          this.hidelogin = true;
        }else {
          this.hidelogout = true;
          this.hidelogin = false;
        }

        if(title == 'Login') {
          this.notoggle = false;
        }else {
          this.notoggle = true;
        }
      })
  }

  logout() {
    this.authguard.logoutuser();
  }
}
