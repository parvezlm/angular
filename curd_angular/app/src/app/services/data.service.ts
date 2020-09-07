import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl = environment.baseurl;

  constructor(private http:HttpClient) { }

  // get employees
  getData() {
    return this.http.get(`/api/employess`);
  }


  // get single employee
  getsingleEmployee(id) {
    debugger
    return this.http.get(`/api/employess/${id}`);
  }

  // create new employee
  sendData(data) {
    return this.http.post(`/api/employess`,data);
  }


  // edit employee
  editData(id,data) {
    debugger
    return this.http.put(`/api/employess/${id}`, data);
  }

  // delete employee
  deleteEmployee(id) {
    debugger
    return this.http.delete(`/api/employess/${id}`);
  }

}

