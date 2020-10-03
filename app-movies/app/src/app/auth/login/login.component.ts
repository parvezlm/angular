import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { AuthGuardService } from './../../services/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  msg = "";

  loginform: FormGroup;

  constructor(
    private route:Router, 
    private authservice:AuthGuardService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      uname:['',[Validators.required]],
      psw: ['', [Validators.required]]
    })
  }

  checkLogin(loginForm:any) {
    let output = this.authservice.validateLoginInfo(loginForm.uname,loginForm.psw);
    if(output == true) {
      this.route.navigate(['/admin']);
    }else {
      this.msg = "Invalid username or password";
    }
  }

}