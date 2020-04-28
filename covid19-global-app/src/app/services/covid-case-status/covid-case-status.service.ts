import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidCaseStatusService {
  serverUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCountriesData() {
    debugger
    return this.http.get(`${this.serverUrl}confirmed`);
  }
}
