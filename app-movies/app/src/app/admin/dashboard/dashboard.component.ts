import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from './../../services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


declare let $:any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'industry','rating','action'];
  dataSource:any;
  totalMovies;
  moviesList = [];
  movieEditData:any = [];
  addmovie;
  editmovie;
  movieId;
  isLoader;
  nodata;
  hollywoodmovie;
  bollywoodmovie;
  southindianmovie;
  viewdetails = [];

  name;
  releaseDate;
  rating;
  review;
  category;
  language;
  industry;
  banner;
  producer;
  director;
  cast;
  poster;
  description;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  addMovieForm: FormGroup;
  submitted = false;

  constructor(private adminservice:AdminService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getMovie();
    this.addMovieForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        release_date: ['', [Validators.required]],
        rating: ['', [Validators.required]],
        review: ['', [Validators.required]],
        category:['', [Validators.required]],
        language: ['', [Validators.required]],
        industry: ['', [Validators.required]],
        banner: ['', [Validators.required]],
        producer: ['', [Validators.required]],
        director: ['', [Validators.required]],
        cast: ['', [Validators.required]],
        poster: ['', [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(500)]]
    })

  }

  get form() {
    return this.addMovieForm.controls;
  }


  getMovie() {
    this.isLoader = true;
    this.adminservice.getMoviesData().subscribe((data:any) => {
      debugger
      this.dataSource = new MatTableDataSource(data.movies);
      this.dataSource.paginator = this.paginator;
      this.totalMovies = data.movies.length;
      this.moviesList = data.movies;
      this.isLoader = false;

      this.hollywoodmovie = this.moviesList.filter((item)=> item.industry == 'hollywood').length;
      this.bollywoodmovie = this.moviesList.filter((item)=> item.industry == 'bollywood').length;
      this.southindianmovie = this.moviesList.filter((item)=> item.industry == 'south indian').length;

      if(this.moviesList.length == 0) {
        this.nodata = true;
      }
    });
  }


  // create movie
  addMovie(form) {
    debugger
    this.submitted = true;

    if(this.addMovieForm.invalid) {
      return false;
    }
   
    let newMovie = {
        name: form.name,
        release_date: form.release_date,
        rating: form.rating,
        review: form.review,
        category: form.category,
        language: form.language,
        industry: form.industry,
        banner: form.banner,
        producer: form.producer,
        director: form.director,
        cast: form.cast,
        poster: form.poster,
        description: form.description
    }

    this.adminservice.createMovie(newMovie).subscribe((res:any)=> {
      debugger
        if(res.status == 'success') {
            $('#addMovie').modal('hide');
            this.getMovie();
        }
    });
    
    this.submitted = false;
    this.addMovieForm.reset();
  }

  addStatus() {
    this.addmovie = true;
    this.editmovie = false;
  }



  // update movie data
  updateData(id) {
    this.editmovie = true;
    this.addmovie = false;
    this.movieEditData = this.moviesList.find((item)=> item.id == id);

    this.name = this.movieEditData.name;
    this.releaseDate = this.movieEditData.release_date,
    this.review = this.movieEditData.review;
    this.rating = this.movieEditData.rating;
    this.category = this.movieEditData.category;
    this.industry = this.movieEditData.industry;
    this.language = this.movieEditData.language;
    this.banner = this.movieEditData.banner;
    this.producer = this.movieEditData.producer;
    this.director = this.movieEditData.director;
    this.cast = this.movieEditData.cast;
    this.poster = this.movieEditData.poster;
    this.description = this.movieEditData.description;    
  }

  updateMovie(data) {
    debugger
    this.submitted = true;
    if(this.addMovieForm.invalid) {
      return false;
    }

    this.adminservice.updateMovie(this.movieEditData.id,data).subscribe((res:any) => {
      debugger
      if(res.status == 'success') {
        $('#addMovie').modal('hide');
        this.getMovie();
      }
    }); 
  }

  // delete movie
  getId(id) {
    debugger
    this.movieId = id;
  }

  deleteMovie() {
    this.adminservice.deleteMovie(this.movieId).subscribe((res:any)=> {
      debugger
      if(res.status == 'success') {
        $('#deleteMovie').modal('hide');
        this.getMovie();
      }
      console.log(res);
    })
  }

  // view movie details
  viewDetails(id) {
    this.movieId = id;
    this.viewdetails = this.moviesList.find((item)=> item.id == id);
  }

}
