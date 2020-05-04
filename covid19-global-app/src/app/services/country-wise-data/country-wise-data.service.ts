import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryWiseDataService {
  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDataByCountry(name) {
    debugger
    return this.http.get(`${this.serverUrl}countries/${name}`);
  }

}
