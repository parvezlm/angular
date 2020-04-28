import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service/data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 products:any = [];

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data:any) => {
      debugger
      this.products = data.fruits;
    });
  }

  share(event) {
    window.alert(`The ${event} has been shared!`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
