import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getCountryList() {
    debugger
    return this.http.get(`${this.serverUrl}countries`);
  }
}
