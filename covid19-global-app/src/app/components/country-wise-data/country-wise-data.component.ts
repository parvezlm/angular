import { Component, OnInit } from '@angular/core';
import { CountryWiseDataService } from './../../services/country-wise-data/country-wise-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-country-wise-data',
  templateUrl: './country-wise-data.component.html',
  styleUrls: ['./country-wise-data.component.scss']
})

export class CountryWiseDataComponent implements OnInit {
  name;
  countryCode;
  confirmed;
  recovered;
  deaths;
  lastUpdate;


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
      this.name = this.route.snapshot.params.name;
      this.countryCode = this.route.snapshot.params['code'];
      this.confirmed = data.confirmed;
      this.recovered = data.recovered;
      this.deaths = data.deaths;
      this.lastUpdate = data.lastUpdate;
    })
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
