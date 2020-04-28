import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../services/data-service/emp-data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees:any = [];
  total_emp;

  constructor(
    private empservice: EmpDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.empservice.getData().subscribe((data:any) => {
      debugger
      this.employees = data.data;
      this.total_emp = data.data.length;
    });
  }

}
