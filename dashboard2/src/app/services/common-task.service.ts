import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonTaskService {
hideNavBar = true;

  constructor() { }

  toggle() {
   return this.hideNavBar = !this.hideNavBar;
  }

  loginValidate(user_id:string, password:string) {
    let u_name = JSON.parse(localStorage.getItem('profile'));
    for(let i = 0; i < u_name.length; i++) {
      if(u_name[i].userName == user_id  && u_name[i].password == password){
        // localStorage.setItem('username',u_name[i].userName);
        return true;
      }else {
        return false;
      }
    }
  }
}
