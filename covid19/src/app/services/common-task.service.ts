import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskService {
  hideSideBar = true;
  constructor() { }

  toggle() {
    this.hideSideBar = !this.hideSideBar;
  }
}
