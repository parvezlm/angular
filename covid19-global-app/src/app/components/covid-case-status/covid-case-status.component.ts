import { Component, OnInit,ViewChild } from '@angular/core';
import { CovidCaseStatusService } from '../../services/covid-case-status/covid-case-status.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-covid-case-status',
  templateUrl: './covid-case-status.component.html',
  styleUrls: ['./covid-case-status.component.scss']
})
export class CovidCaseStatusComponent implements OnInit {
  datas:any = []; 
  displayedColumns: string[] = ['id', 'countryRegion', 'provinceState', 'confirmed','recovered','deaths','lastUpdate'];
  dataSource:any;

  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private covidCase:CovidCaseStatusService) { 

  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.getCovidData();
  }
  

  getCovidData() {
    this.covidCase.getCountriesData().subscribe((data:any) => {
      debugger
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}

