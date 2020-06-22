import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  validateLoginInfo(uname:string, password:string) {
    if(uname == 'admin' && password == 'admin@123') {
      localStorage.setItem('username','admin');
      return true;
    }else {
      return false;
    }
  }

  logoutuser() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
