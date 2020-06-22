import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonTaskService } from './service/common-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleName;
  constructor(
    public commonTask:CommonTaskService, 
    private title:Title, 
    private route:Router, 
    private location:Location
    ) {}

    ngOnInit() {
    this.route.events.pipe(
      map(() => this.route.url.slice(1).charAt(0).toUpperCase() + this.route.url.slice(2))
      ).subscribe(path  => {
      this.title.setTitle('App | '+ path);
    });
    
  }
}
