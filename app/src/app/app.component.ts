import { Component } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { Subscriber } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  displayedColumns: string[] = ['id','profile_image','employee_name', 'employee_salary', 'employee_age'];
  dataSource;

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataservice.getEmployeeData().subscribe(data => {
      debugger
      this.dataSource = data.data;
      console.log(this.dataSource);
    })
  }
}
