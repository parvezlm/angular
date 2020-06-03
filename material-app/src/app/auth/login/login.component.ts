import { Component, OnInit } from '@angular/core';
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
  constructor(private route:Router, private authservice:AuthGuardService) { }

  ngOnInit(): void {
  }

  checkLogin(loginForm:any) {
    let output = this.authservice.validateLoginInfo(loginForm.uname,loginForm.psw);
    if(output == true) {
      this.route.navigate(['/admin']);
    }else {
      this.msg = "invalid username or password";
    }
  }

}
