import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service/data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products:any = [];
  constructor(
    private dataService:DataServiceService,
    private route:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.getItem(this.route.snapshot.params['id']);
  }

  getItem(id:any) {
    this.dataService.getItemById(id)
      .subscribe((data:any) => {
        debugger
        this.products = data.fruits;
      })
  }

  // getSingleData(id:any) {
  //   this.dataService.getDataById(id).subscribe((data:any) => {
  //     debugger
  //     this.products = data.fruit;
  //     console.log(this.products);
  //   })
  // }

}
