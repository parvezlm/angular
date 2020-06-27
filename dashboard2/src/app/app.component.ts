import { map } from 'rxjs/operators';
import { CommonTaskService } from './services/common-task.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public commonservice:CommonTaskService,
    private route:Router,
    private title:Title
    ){}

    ngOnInit() {
      this.changeTitle();
    }

    changeTitle() {
      this.route.events.pipe(map(()=> 
        this.route.url.slice(1).charAt(0).toUpperCase() + this.route.url.slice(2).toLowerCase()
      )).subscribe(res=> {
         this.title.setTitle(res);
      })
    }
}
