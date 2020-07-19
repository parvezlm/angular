import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  base_url = environment.base_url;

  constructor(private http:HttpClient) { }

  getCountries() {
    debugger
    return this.http.get(`${this.base_url}/countries`);
  }

  getCountriesData(countryName) {
    return this.http.get(`${this.base_url}/countries/${countryName}/confirmed`);
  }
}
