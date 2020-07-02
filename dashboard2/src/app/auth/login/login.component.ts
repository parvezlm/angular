import { Component, OnInit } from '@angular/core';
import { CommonTaskService } from './../../services/common-task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profile = [
    {name:'Jhon Doe',email:'jhon.doe@gmail.com',password:'doe@123',userName:'jhondoe'},
    {name:'Smith',email:'smith@gmail.com',password:'smith@123',userName:'smith'},
    {name:'Deepak kumar',email:'dk@gmail.com',password:'dk@123',userName:'kdeepak'},
    {name:'Mos',email:'ms@gmail.com',password:'ms@123',userName:'mosandmos'},
    {name:'Christopher',email:'chris@gmail.com',password:'chris@123',userName:'chris'},
  ];
 
  data = JSON.stringify(this.profile);
  constructor(
    private commonservice:CommonTaskService,
    private route:Router
    ) { }

  ngOnInit(): void {
    localStorage.setItem('profile',this.data);
  }

  onsubmit(uname,password) {
    let output = this.commonservice.loginValidate(uname,password);
    if(output == true) {
      this.route.navigate(['/profile']);
    }else {
      this.route.navigate(['/login']);
    }

    console.log(uname);
  }
}
