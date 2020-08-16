import { Component, OnInit} from '@angular/core';
import { DashboardService } from './../../services/dashboard.service';
import { map, filter } from 'rxjs/operators';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  covid_case = [];
  isloades:boolean = true;
  isdisplay:boolean = false;
  isdisplay_g:boolean = false;
  india_graph_data:any = [];
  indian_total_case = [];
  india_state_case = [];
  state_name = [];
  confirmed = [];
  recovered = [];
  deaths = [];
  countries = [];

  global_graph_data:any = [];
  global_confirmed = [];
  global_recovered = [];
  global_deaths = [];
  global_cities_name = [];


  constructor(private dashboardservice:DashboardService) { }

  ngOnInit(): void {
    this.getCases(); 
    this.getIndiaData(); 
    
    // indian states data
    this.dashboardservice.getIndiaState().subscribe((res:any) => {
      debugger

      this.india_state_case = res.filter(state_data => state_data.confirmed > 90000);
      this.state_name = this.india_state_case.map(state_name => state_name.provinceState);
      this.confirmed = this.india_state_case.map(conf_case=> conf_case.confirmed);
      this.recovered = this.india_state_case.map(recover_case => recover_case.recovered);
      this.deaths = this.india_state_case.map(death_case => death_case.deaths);
  
    // indian state cases chart
    this.india_graph_data = new Chart('india_chart', {
      type: 'bar',
      data: {
        labels: this.state_name,    //states name labels
        datasets: [
          {
            label: "Confirmed",    //legends label
            backgroundColor: "#fc4a1a",                    // confirmed cases
            data: this.confirmed
          },
          {
            label: "Recovered",
            backgroundColor: "#00b09b",                    // recoverd cases
            data: this.recovered
          },
          {
            label: "Deaths",
            backgroundColor: "#ee0979",                    // deaths cases
            data: this.deaths
          }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
       })
    });// indian state case chart end


    // global
    this.dashboardservice.getCountries().subscribe((res:any) => {
      debugger
       this.countries = res.filter(countries => countries.confirmed > 280000);
       this.global_cities_name = this.countries.map(cites => cites.combinedKey);
       this.global_confirmed = this.countries.map(confirm => confirm.confirmed);
       this.global_recovered = this.countries.map(recover => recover.recovered);
       this.global_deaths = this.countries.map(deaths => deaths.deaths);
       

      // global graph

      this.global_graph_data = new Chart('global_chart', {
        type: 'bar',
        data: {
          labels: this.global_cities_name,    //states name labels
          datasets: [
            {
              label: "Confirmed",    //legends label
              backgroundColor: "#fc4a1a",                    // confirmed cases
              data: this.global_confirmed
            },
            {
              label: "Recovered",
              backgroundColor: "#00b09b",                    // recoverd cases
              data: this.global_recovered
            },
            {
              label: "Deaths",
              backgroundColor: "#ee0979",                    // deaths cases
              data: this.global_deaths
            }
      ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  }
              }]
          }
      }
         })
    })


  }

  // all cases
  getCases() {
    this.dashboardservice.getCase().subscribe(res => {
      debugger 

      let keyval = Object.keys(res).map((data)=> res[data]);
      this.covid_case = [{
          confirmed:keyval[0].value,
          recovered:keyval[1].value,
          deaths:keyval[2].value,
          lastupdate: keyval[9]
        }];

        this.isloades = false; //hide loader
    });
  }


  // indian cases
  getIndiaData() {
    this.dashboardservice.getIndianTotalCased().subscribe(res=> {
      debugger
      // console.log(res);
      let keyval = Object.keys(res).map((data)=> res[data]).filter((val)=> val.value);
      this.indian_total_case = [{
          confirmed:keyval[0].value,
          recovered:keyval[1].value,
          deaths:keyval[2].value
      }]

    })
  }







  toggleIndia() {
      this.isdisplay = !this.isdisplay;
  }

  toggleGlobe() {
    this.isdisplay_g = !this.isdisplay_g;
  }
}
