import { Component, OnInit } from '@angular/core';
import { CommonTaskService } from './../../service/common-task.service';
declare let $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  routesName = [
    { path: 'dashboard',icon:'dashboard' },
    { path: 'applications', icon:'apps' },
    { path: 'contact',icon:'contacts' },
    { path: 'profile',icon:'school' },
    { path: 'project',icon:'toys' }
  ]
  constructor(public commonTask: CommonTaskService) { }

  ngOnInit(): void {
    this.windowResize();
  }


  windowResize() {
    if ($(window).width() < 992) {
      this.commonTask.hideSideNav = true;
    }
  }
}
