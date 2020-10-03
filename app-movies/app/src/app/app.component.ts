import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { CommonTasksService } from './services/common-tasks.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nosidebar = true;
  current_url;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    public commonTask: CommonTasksService,
    private location: Location
  ){}

  ngOnInit() {
    this.getTitle();
  }

   //change document title
   getTitle() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
         }else {
            return 'Title Blank'
         }
      })
    ).subscribe(res => {
      this.title.setTitle('Movies |' + " " + res);

      if(res == 'Login') {
        this.nosidebar = false;
      }else {
        this.nosidebar = true;
      }
      
    })
  }
}
