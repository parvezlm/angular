import { MoviesServiceService } from './../services/movies-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  courses = [];

  courseDetails:FormGroup;

  constructor(private formBuilder: FormBuilder, private courseService:MoviesServiceService) {
     this.courseDetails = this.formBuilder.group({
       id:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
       coursename:['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
       price:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
       imageurl:['',[Validators.required]],
       requires1:['',[Validators.required]],
       requires2:['',[Validators.required]],
       requires3:[''],
       desc:['',[Validators.required,Validators.minLength(30),Validators.maxLength(300)]]
     })
   }

  ngOnInit(): void {}

  get courseId() {
    return this.courseDetails.get('id')
  }

  get courseName() {
    return this.courseDetails.get('coursename')
  }

  get price() {
    return this.courseDetails.get('price')
  }

  get courseDesc() {
    return this.courseDetails.get('desc')
  }

  saveCourse(course:any) {
   this.courseService.saveMovieData(this.courses).subscribe(data =>{});
  }

  onsubmit(courseDetails){
    this.courses =[{
      id:courseDetails.id,
      name:courseDetails.coursename,
      price:courseDetails.price,
      url:courseDetails.imageurl,
      requirements:{
        requires1:courseDetails.requires1,
        requires2:courseDetails.requires2,
        requires3:courseDetails.requires3
      },
      description:courseDetails.desc
    }]
    this.saveCourse(this.courses);
    this.courseDetails.reset();
    // this.courseDetails.markAsPristine();
  }

}
