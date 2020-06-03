import { MoviesServiceService } from './../../services/movies-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses = [];
  allCourses = [];
  constructor(private courseservice:MoviesServiceService) { }
  inloades = true;
  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseservice.getData().subscribe((data:any) => {
      debugger
      this.courses = Object.keys(data).map(key => data[key].reduce((val1, val2) => val1 + val2));
      this.inloades = false;
      // console.log(this.courses);
    })
  }

}
