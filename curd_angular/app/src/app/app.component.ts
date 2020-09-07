import { Component,OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms'
declare let $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees:any = [];
  employee = {};
  editempl = {};
  totalemp;
  submitted = false;
  updated = false;
  employeeName;
  employeeSalary;
  employeeAge;
  empId;
  singleEmployee = [];
  
  addEmployee: FormGroup;
  editEmploeey: FormGroup;

  constructor(private dataservice:DataService, private formBuilder:FormBuilder) {
    this.dataservice.getData().subscribe((res) => {
      this.employees = res;
      this.totalemp = this.employees.data.length;
      console.log(res);
    }) 
  }

  ngOnInit() {
    this.addEmployee = this.formBuilder.group({
      employee_name:['',Validators.required],
      employee_salary:['',Validators.required],
      employee_age:['',Validators.required],
      profile_image:['']
    });

    this.editEmploeey = this.formBuilder.group({
      employee_name:['',Validators.required],
      employee_salary:['',Validators.required],
      employee_age:['',Validators.required],
      profile_image:['']
    });

  }

  get f() { return this.addEmployee.controls; }
  get e() { return this.editEmploeey.controls; }

  showModal():void {
    $("#myModal").modal('show');
  }

  hideModal():void {
    $("#myModal").modal('hide');
  }

  showEditModal():void {
    $('#editmodal').modal('show');
  }

  hideEditModal():void {
    $('#editmodal').modal('hide');
  }

  viewModal():void {
    $('#viewmodal').modal('show');
  }

  openDeletModel():void {
    $('#deleteModal').modal('show');
  }

  hideDeletModel():void {
    $('#deleteModal').modal('hide');
  }

  // create employee
  sendData(data) {
    this.dataservice.sendData(data).subscribe(res=> {
      console.log(res);  
    })
  }

  // edit employee
  editData(id,data) {
    debugger
    this.dataservice.editData(id,data).subscribe(res => {
      console.log(res);
    })
  }

// get single employee
getSingleEmp(id) {
  this.dataservice.getsingleEmployee(id).subscribe((res:any)=> {
    debugger
    this.singleEmployee = res;
    
    this.viewModal();
  })
}

  // get and send data to server to create new employee
  onSubmit(form) {
    this.submitted = true;
    if(!this.addEmployee.valid) {
      return false
    }
    this.employee = {
      employee_name: form.employee_name,
      employee_salary: form.employee_salary,
      employee_age: form.employee_age,
      profile_image: form.profile_image
    }

    this.sendData(this.employee);
    setTimeout(()=> {
      this.hideModal();
    },2000);
    console.log(this.employee);
  }

  // get data by id and bind into form
  updateEmployee(id) {
    let emp = this.employees.data.find((el) => el.id == id);
    this.employeeName = emp.employee_name;
    this.employeeSalary = emp.employee_salary;
    this.employeeAge = emp.employee_age;
    this.empId = emp.id;
    
    this.showEditModal();
  }

  // send updated employee data to server
  onUpdate(form) {
    this.updated = true;
     if(!this.editEmploeey.valid) {
       return false
     }

     this.editempl = {
      employee_name: form.employee_name,
      employee_salary: form.employee_salary,
      employee_age: form.employee_age,
      profile_image: form.profile_image
     }

     this.editData(this.empId,this.editempl);
     setTimeout(()=> {
       this.hideEditModal();
     },2000); 
  }

  // delete employee
  deleteEmp(id) {
    debugger
    this.dataservice.deleteEmployee(id).subscribe(res=> {
      console.log(res);
    });

    this.hideDeletModel();
  }

  openDeleteWarning() {
    this.openDeletModel()
  }

}
