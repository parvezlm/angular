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
}
