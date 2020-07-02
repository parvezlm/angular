import { Component, OnInit } from '@angular/core';
import { CommonTaskService } from './../../services/common-task.service';

declare let $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  approutes = [
    { path:'dashboard', icon:'dashboard', pathname:'dashboard'},
    { path:'countries-list', icon:'public', pathname:'countries list'},
    { path:'summery', icon:'content_paste',pathname:'summery' }
  ];


  constructor(public commonTask:CommonTaskService) { }

  ngOnInit(): void {
    this.changeSts();
  }

  changeSts() {
    if($(window).width() < 992) {
      this.commonTask.hideSideBar = false;
    }
  }


  toggle() {
    this.commonTask.toggle();
  }
}
