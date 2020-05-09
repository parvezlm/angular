import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  confirmed:any;
  recovered:any;
  deaths:any;
  time:any;
 
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.homeservice.getData().subscribe((data:any) => {
      debugger
      this.confirmed = data.confirmed;
      this.recovered = data.recovered;
      this.deaths = data.deaths;
      this.time = data.lastUpdate;
    }) 
  }
 

}
