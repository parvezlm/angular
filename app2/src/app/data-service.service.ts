import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  serverUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('./assets/data/data.json');
  }
}
