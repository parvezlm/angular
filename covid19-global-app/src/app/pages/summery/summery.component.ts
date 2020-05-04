import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DailyTimeSummeryService } from './../../services/daily-time-summery/daily-time-summery.service';


@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'confirmed', 'recovered', 'deaths','active','incidentRate','peopleTested','reportDate','action'];
  dataSource;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private  dailySummery:DailyTimeSummeryService) { }

  ngOnInit(): void {
    this.getSummery();
  }

  getSummery(){
    this.dailySummery.getSummeryReport().subscribe((data:any) => {
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
