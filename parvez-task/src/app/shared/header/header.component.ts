import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ChangeNameService } from './../../service/change-name.service';

declare let $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], 
  host: {
    "(window:click)" : "onDropClic()"
  }
})
export class HeaderComponent implements OnInit {
  user_name = 'User';
  page_title;
  dropdown;
  featuresDropdown;
  appsDropdown;

  constructor(private changeTitle:ChangeNameService , private titleSerive:Title ) { }

  

  ngOnInit(): void {
    $(document).ready(function() {
      var sts = true;
      $('.view_more_btn').click(function() {
          $('.controls_menu').slideToggle();
      })

      $(document).on("click", function(event){
        var $trigger = $(".view_more_btn");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".controls_menu").slideUp("fast");
        }            
      });
    });


    // get title
    this.getTitle();

  }

  // get title

  getTitle() {
    this.changeTitle.getTitle().subscribe(title => {
       this.page_title = title;
       console.log(this.page_title);
    })
  }


  showDropdowPages(event) {
    this.dropdown = true;
    this.featuresDropdown = false;
    this.appsDropdown = false;
    event.stopPropagation();
  }

  showDropdowFeatures(event) {
    this.featuresDropdown = true;
    this.dropdown = false;
    this.appsDropdown = false;
    event.stopPropagation();
  }

  showDropdowApps(event) {
    this.appsDropdown = true;
    this.dropdown = false;
    this.featuresDropdown = false;
    event.stopPropagation();
 }


  onDropClic() {
    this.dropdown = false;
    this.featuresDropdown = false;
    this.appsDropdown = false;
  }

}
