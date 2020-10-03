import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getMoviesData() {
    debugger
    return this.http.get('/api/movies');
  }


  createMovie(data) {
    debugger
    return this.http.post(`/api/movies`, data)
  }


  updateMovie(id,data) {
    debugger
   return this.http.put(`api/movies/${id}`, data);
 }

 deleteMovie(id) {
   debugger
   return this.http.delete(`api/movies/${id}`);
 }
 
}
