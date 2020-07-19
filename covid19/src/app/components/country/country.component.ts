import { Component, OnInit,ViewChild } from '@angular/core';
import { CountriesService } from './../../services/countries.service';
import { DashboardService } from './../../services/dashboard.service';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'country', 'state', 'confirmed','recovered','death'];
  dataSource;
  isloades = true;
  lastupdate;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

 
  constructor(
    private countriesService:CountriesService,
    private DashboardService: DashboardService
    ) { }

  ngOnInit(): void {
    this.getCountriesData();
    this.getLastUpdate()
  }


// get countries data
getCountriesData() {
  this.countriesService.getCountries().subscribe((res:any)=> {
    debugger
     for(let i = 0;i < res.length; i++) {
       if(res[i].provinceState == null) {
         res[i].provinceState = "NA";
       }
     }
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.isloades = false;
    console.log(res);
  })
}


// get last update time
getLastUpdate() {
  debugger
  this.DashboardService.getCase().pipe(
    map((data:any)=> data.lastUpdate)
  ).subscribe(res => {
    this.lastupdate = res;
  })
}


  //filter table method
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
