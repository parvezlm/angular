import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  serverUrl = 'https://stats.nba.com/stats/scoreboard';
  constructor(
    private http: HttpClient
  ) { }

  getData(id:string){
    debugger
    return this.http.get<any>(`${this.serverUrl}`,{LeagueID:id});
  }
}
