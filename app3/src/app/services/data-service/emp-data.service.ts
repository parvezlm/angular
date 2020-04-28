import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  baseUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) { }

  getData() {
    debugger
    return this.http.get(`${this.baseUrl}`);
  }

  // get single employee data
  getSingleData(id:any) {
    debugger
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
