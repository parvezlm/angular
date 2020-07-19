import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryDetailsService } from './../../services/country-details.service';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'country', 'action'];
  dataSource;
  isloades = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private countriesService:CountryDetailsService) { }

  ngOnInit(): void {
    this.getCountries();
  }


  getCountries() {
    this.countriesService.getCountries().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data.countries);
      this.dataSource.paginator = this.paginator;
      this.isloades = false;
      console.log(data);
    })
  }

  // filter data method
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
