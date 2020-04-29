import { Component, OnInit } from '@angular/core';
import { CountryWiseDataService } from './../../services/country-wise-data/country-wise-data.service';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-country-wise-data',
  templateUrl: './country-wise-data.component.html',
  styleUrls: ['./country-wise-data.component.scss']
})

export class CountryWiseDataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'confirmed', 'recovered','deaths','lastUpdate'];
  dataSource;

  constructor(
    private countryWise: CountryWiseDataService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.getDataBycountry(this.route.snapshot.params.name);
    this.getDataBycountry(this.route.snapshot.params['name']);
  }

  getDataBycountry(name) {
    this.countryWise.getDataByCountry(name).subscribe((data:any) => {
      debugger
      this.dataSource = new MatTableDataSource(data);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
