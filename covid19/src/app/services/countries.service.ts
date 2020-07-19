import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
   base_url = environment.base_url;

  constructor(private http:HttpClient) { 
  }

  getCountries() {
    debugger
    return this.http.get(`${this.base_url}/confirmed`);  
  }


 }
