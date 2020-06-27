import { map } from 'rxjs/operators';
import { CommonTaskService } from './../../services/common-task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  heading;
  constructor(
    public commonservice:CommonTaskService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.getPathName();
  }

  getPathName() {
    this.route.events.pipe(map(()=> this.route.url.slice(1))).subscribe(res=> {
      this.heading = res;
    })
  }

}
