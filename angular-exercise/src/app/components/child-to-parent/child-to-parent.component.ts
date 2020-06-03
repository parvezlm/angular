import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss']
})
export class ChildToParentComponent implements OnInit {
  users = [];
  admins = [];
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
}
