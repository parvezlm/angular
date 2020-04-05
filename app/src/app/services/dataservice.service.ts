import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  baseUrl =' http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http:HttpClient) { }

  getEmployeeData() {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getSportData() {
    return this.http.get<any>('https://stats.nba.com/stats/boxscore');
  }
}
