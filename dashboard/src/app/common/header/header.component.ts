import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { map } from 'rxjs/operators';
import { CommonTaskService } from './../../service/common-task.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  heading;
  constructor(public commonTask:CommonTaskService,private route:Router) { }

  ngOnInit(){
    this.getPathName();
  }

  getPathName() {
    this.route.events.pipe(map(() => this.route.url.slice(1))).subscribe(pathname => {
      this.heading = pathname;
    });
  }
}
