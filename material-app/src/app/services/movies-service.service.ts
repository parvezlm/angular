import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class MoviesServiceService {
  serverUrl = environment.firebaseConfig.databaseURL;

  constructor(private http:HttpClient) { }

  saveMovieData(course:any[]) {
    return this.http.post(`${this.serverUrl}/courses.json`, course);
  }

  getData(){
    debugger
    return this.http.get(`${this.serverUrl}/courses.json`);
  }

  getSingleCourse(id) {
    debugger
    return this.http.get(`${this.serverUrl}/courses/${id}`);
  }
}
