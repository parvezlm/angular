import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonTasksService {
  sidebarCollpase = false;
  constructor() { }

  toggle() {
    this.sidebarCollpase = !this.sidebarCollpase;
  }
}
