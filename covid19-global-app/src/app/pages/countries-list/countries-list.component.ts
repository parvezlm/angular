import { CountryListService } from './../../services/country-list/country-list.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'iso2', 'action'];
  dataSource;

  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private countryList:CountryListService) { }

  ngOnInit(): void {
    this.getCountryListData();
  }

  getCountryListData() {
    this.countryList.getCountryList().subscribe((data:any) => {
      debugger;
      console.log(data);
      this.dataSource = new MatTableDataSource(data.countries);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
