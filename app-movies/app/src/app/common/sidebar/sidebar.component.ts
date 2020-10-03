import { CommonTasksService } from './../../services/common-tasks.service';
import { Component, OnInit } from '@angular/core';

declare let $:any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarlinks = [
    { path:'admin', icon_name:'dashboard', path_name:'dashboard'},
    { path:'home',icon_name:'home', path_name:'home'},
    { path:'bollywood', icon_name:'tv', path_name:'bollywood'},
    { path:'hollywood', icon_name:'videocam', path_name:'hollywood'},
    { path:'south-indian', icon_name:'panorama_wide_angle', path_name:'south indian'}
  ]

  constructor(public commomTask:CommonTasksService) { }

  ngOnInit(): void {
    this.changeStatus();
  }

  changeStatus() {
    if($(window).width() < 992) {
      this.commomTask.sidebarCollpase = true;
    }
  }
}
