import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let btn = document.querySelector('.toggle_btn');
    let sts = true;
    btn.addEventListener('click', function() {
      if(sts == true) {
        this.classList.add('open');
        document.querySelector('.sidebar').classList.add('left');
        sts = false;
      }else if(sts == false) {
        this.classList.remove('open');
        document.querySelector('.sidebar').classList.remove('left');
        sts = true;
      }
    });


    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 45) {
        document.querySelector('.header').classList.add('top');
      } else {
        document.querySelector('.header').classList.remove('top');
      }
    })

  }

}
