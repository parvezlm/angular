import { ActivatedRoute } from '@angular/router';
import { DailyTimeSummeryService } from './../../services/daily-time-summery/daily-time-summery.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-daily-time-summery',
  templateUrl: './daily-time-summery.component.html',
  styleUrls: ['./daily-time-summery.component.scss']
})
export class DailyTimeSummeryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'countryRegion', 'provinceState', 'confirmed','recovered','deaths','lastUpdate'];
  dataSource;
  dateValue:any;
  items;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private dailySummry:DailyTimeSummeryService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getDataByDate(this.route.snapshot.params.date);
  }

  getDataByDate(date) {
    this.dailySummry.getDataByDate(date).subscribe((data:any) => {
      debugger
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dateValue = date;
      this.isLoadingResults = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
