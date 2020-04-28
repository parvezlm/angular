import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  serverUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  getData() {
    debugger
    return this.http.get(`${this.serverUrl}`)
  }
}
