import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl = 'assets/data/';

  constructor(private http:HttpClient) { }

  getData() {
    debugger;
    return this.http.get(`${this.baseUrl}data.json`);
  }

  getDataById(id:any) {
    debugger
    return this.http.post(`${this.baseUrl}data.json`,{id:id});
  }

  getItemById(id: number) {
    return this.http.get<any>(`${this.baseUrl}data.json`)
      .pipe(
        map((items:any) => {
          return items.find((item:any) => {
            return item.id == id;
          });
        })
      );
  }
}
