import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetailsService } from './../../services/country-details.service';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-country-wise-details',
  templateUrl: './country-wise-details.component.html',
  styleUrls: ['./country-wise-details.component.scss']
})
export class CountryWiseDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'state', 'confirmed','recovered','death'];
  dataSource;
  country_name;
  country_code;
  isloades = true;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private route:ActivatedRoute,
    private CountryDetailsService:CountryDetailsService
    ) { }

  ngOnInit(): void {
    this.country_name = this.route.snapshot.params['name'];
    this.country_code = this.route.snapshot.params['code'];
    this.getcounteryData(this.route.snapshot.params['name']);
  }

  // get countery data

  getcounteryData(countryName) {
    this.CountryDetailsService.getCountriesData(countryName).subscribe((data:any) => {
      debugger
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator
      this.isloades = false;
      console.log(data);
    })
  }

   //filter table method
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
