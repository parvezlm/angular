import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DailyTimeSummeryService {
  serverUrl = environment.baseUrl;


  constructor(private http:HttpClient) { }

  getSummeryReport() {
    debugger
    return this.http.get(`${this.serverUrl}daily`);
  }

  getDataByDate(date:any) {
    debugger
    return this.http.get(`${this.serverUrl}daily/${date}`);
  }
}
