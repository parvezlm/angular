import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  urlname;

  constructor(private route:Router, private location: Location) {
      this.route.events.subscribe((url) => {
        if(this.location.path() !== "") {
            this.urlname = this.location.path();
        }
      })
  }

  ngOnInit() {
 
  }

}
