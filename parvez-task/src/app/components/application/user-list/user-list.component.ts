import { Component, OnInit } from '@angular/core';


export interface customers {
  name: string;
  email: string;
  country: string;
  shipdate: string;
  companyName:string;
  code:string;
  status:string;
}

const customer_data: customers[] = [
  {name:"Hayes Boule", email:"hboule0@hp.com",country:"Brazil",code:"BR",status:"approved",shipdate:"10/15/17",companyName:"Casper Karluke"},
  {name:"Humbert Brisnen", email:"humbertB@hp.com",country:"Vietnam",code:"VR",status:"pending",shipdate:"12/20/16",companyName:"Casper Karluke"},
  {name:"Hayes Boule", email:"hboule0@hp.com",country:"China",code:"CN",status:"paid",shipdate:"09/25/18",companyName:"Casper Karluke"},
  {name:"Krishnen Tospell", email:"krishenT@hp.com",country:"Brazil",code:"BR",status:"approved",shipdate:"06/07/16",companyName:"Microsoft"}
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  host: {
    "(window:click)": "onDropClick()"
  }

})
export class UserListComponent implements OnInit {
  searchDrop = false;
  displayedColumns: string[] = ['blank','srno', 'name', 'country', 'date','companyName','action'];
  dataSource = customer_data;
  sts = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSearchDrop(event) {
    if(this.sts == true) {
      this.searchDrop = true;
      this.sts = false;
    
    }else if(this.sts == false) {
      this.searchDrop = false;
      this.sts = true;
    }

    event.stopPropagation(); // Drop down propagation
  }


  onDropClick() { // close drop down
    this.searchDrop = false;
    this.sts = true;
  }

}
