import { ChangeNameService } from './service/change-name.service';
import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private changeTitle: ChangeNameService,private titleService: Title) {}

  ngOnInit() {
    this.changeTitle.getTitle().subscribe(title => {
              this.titleService.setTitle(title);
      });
  }

}
