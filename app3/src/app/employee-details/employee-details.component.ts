import { Component, OnInit } from '@angular/core';
import { EmpDataService } from './../services/data-service/emp-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  single_emp:any = [];


  constructor(
    private dataservice:EmpDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // alert(this.route.snapshot.params['id']);
    this.getSingleEmp(this.route.snapshot.params.id);
  }

  getSingleEmp(id) {
    this.dataservice.getSingleData(id).subscribe((singleEmp:any) => {
      debugger
      console.log(singleEmp);
      this.single_emp = singleEmp;
    })
  }

}
