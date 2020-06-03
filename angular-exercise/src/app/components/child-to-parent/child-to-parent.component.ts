import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss']
})
export class ChildToParentComponent implements OnInit {
  users = ["John"];
  admins = ["Smith"];
  users_total;
  admins_total;

  constructor() { }

  ngOnInit(): void {
  }

  getUser(data) {
   this.users.push(data);
   this.users_total = this.users.length;
  }

  getAdmin(adata) {
    this.admins.push(adata);
    this.admins_total = this.admins.length;
  }

  removeUser(i) {
    this.users.splice(i,1);
    this.users_total = this.users.length;
  }

  removeAdmin(i) {
    this.admins.splice(i,1);
    this.admins_total = this.admins.length;
  }
}
