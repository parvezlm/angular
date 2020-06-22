import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskService {
  hideSideNav: boolean = false;
  constructor() { }


  toggleSideNav() {
    this.hideSideNav = !this.hideSideNav;
  }

}
