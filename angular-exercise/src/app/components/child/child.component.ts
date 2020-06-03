import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() total_users;
 @Input() total_admins;


  @Output() usersValue = new EventEmitter();
  @Output() adminsValue = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  addUsers(user) {
    if (user.value == "") {
      document.querySelector('.error').innerHTML = 'Please enter the value';
      return false;
    } else {
      document.querySelector('.error').innerHTML = '';
    }
    this.usersValue.emit(user.value);
    user.value = "";
  }

  addAdmins(admin) {
    if (admin.value == "") {
      document.querySelector('.error2').innerHTML = 'Please enter the value';
      return false;
    } else {
      document.querySelector('.error2').innerHTML = '';
    }
    this.adminsValue.emit(admin.value);
    admin.value = "";
  }
}
