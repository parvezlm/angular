import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  datas;
  constructor(private dataService: DataserviceService) {}


  ngOnInit() {
    this.getData();
  }

  getData() {
    return this.dataService.getSportData().subscribe(data => {
      debugger;
      this.datas = data;
    })
  }

}
