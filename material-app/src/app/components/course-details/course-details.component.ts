import { MoviesServiceService } from './../../services/movies-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  constructor(
    private courseservice:MoviesServiceService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getSingleData(this.route.snapshot.params['id']);
  }

  getSingleData(id) {
    this.courseservice.getSingleData(id).subscribe(data => {
      console.log(data);
    })
  }
}
