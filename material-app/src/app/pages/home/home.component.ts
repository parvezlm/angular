import { AngularFirestore } from 'angularfire2/firestore';
import { MoviesServiceService } from './../../services/movies-service.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses = [];
  allCourses:any = [];
  inloades = true;
  constructor(private courseservice:MoviesServiceService) { }
  

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseservice.getData().subscribe((data:any) => {
      debugger
      this.courses = Object.keys(data).map(key => data[key].reduce((val1, val2) => val1 + val2));
      let newarr = Object.keys(data);
      for(let i = 0; i <= this.courses.length - 1; i++) {
            this.courses[i].id = newarr[i];
      }
       this.inloades = false;
    })
  }
}
