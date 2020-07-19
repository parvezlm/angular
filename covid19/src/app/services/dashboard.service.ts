import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  server_url = environment.base_url;
  constructor(private http:HttpClient) { }

  getCase() {   //get all cases
    debugger;
    return this.http.get(`${this.server_url}`);
  }

  // get indian total cases
  getIndianTotalCased() {
   debugger
   return this.http.get(`${this.server_url}/countries/in`);
  } 

  //get indian state wise case
  getIndiaState() {
    debugger
    return this.http.get(`${this.server_url}/countries/in/confirmed`);
  }

  //get countries 

  getCountries() {
    debugger
    return this.http.get(`${this.server_url}/confirmed`);
  }
}
