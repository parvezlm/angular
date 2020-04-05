import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiData;
  constructor(
    private dataservice: DataService
    ) { }

  ngOnInit(): void {
    this.getData();
  }

    getData() {
      this.dataservice.getData().subscribe(data => {
        debugger
        this.apiData = data
      })
    }
  }