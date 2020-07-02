import { Component, OnInit } from '@angular/core';
import { CommonTaskService } from './../../services/common-task.service';

declare let $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public commonservice:CommonTaskService) { }
   sidebar_routes = [
     {path:'dashboard',icon:'dashboard'},
     {path:'about',icon:'local_offer'},
     {path:'application',icon:'apps'},
     {path:'contact',icon:'contacts'},
     {path:'projects',icon:'layers'},
   ];



   
  ngOnInit(): void {
    this.changeStatus();
  }

  changeStatus() {
    if($(window).width() < 992) {
      this.commonservice.hideNavBar = false;
    }
  }

  toggle_sidebar() {
    this.commonservice.toggle();
  }

}
