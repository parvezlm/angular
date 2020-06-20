import { Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router} from "@angular/router";
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChangeNameService {

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) { }

  getTitle() {
   return this.router.events.pipe(map(() => {
      let child = this.activatedRoute.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        } else {
          return null;
        }
      }
      return null;
    }))
  }
}
