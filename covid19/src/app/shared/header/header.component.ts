import { Component, OnInit } from '@angular/core';
import { CommonTaskService } from './../../services/common-task.service';
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  heading:string;

  constructor(
    public commonTask:CommonTaskService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getPathName();
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
      })
  }

 
}
