import { Component } from '@angular/core';
import { CommonTaskService } from './services/common-task.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public commonTask: CommonTaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.getTitle();
    console.log(this.router.events);
  }


  //change document title
  getTitle() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'];
         }
      })
    ).subscribe(res => {
      this.title.setTitle('Covid-19 |' + " " + res);
    })
  }
}
