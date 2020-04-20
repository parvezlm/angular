import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  fruits:any = [];
  total_fruits:number;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data:any) => {
      debugger
        console.log(data);
        this.fruits = data.fruits;
        this.total_fruits = data.fruits.length;
    });
  }
}

