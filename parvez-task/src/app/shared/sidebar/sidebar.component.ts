import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sidebar = true;
    let toggle_btn = document.querySelector('.toggle_btn');
    toggle_btn.addEventListener('click',slideToggle);

    function slideToggle() {
      if(sidebar == true) {
        document.querySelector('.sidebar').classList.add('collpase_sidebar');
        document.querySelector('.main').classList.remove('margin_lft');
        document.querySelector('.fullwidht_header1').classList.remove('padding_lft');
        document.querySelector('.fullwidht_header2').classList.remove('padding_lft');
        document.querySelector('.footer_inner').classList.remove('padding_lft');
        
        sidebar = false;
      }else if(sidebar == false) {
        document.querySelector('.sidebar').classList.remove('collpase_sidebar');
        document.querySelector('.main').classList.add('margin_lft');
        document.querySelector('.fullwidht_header1').classList.add('padding_lft');
        document.querySelector('.fullwidht_header2').classList.add('padding_lft');
        document.querySelector('.footer_inner').classList.add('padding_lft');

        sidebar = true;
      }
    }


    // accordians
     $('.accord_btn').click(function() {
       if($(this).hasClass('active')) {
         $(this).removeClass('active');
         $(this).next('.submenu_content').slideUp().removeClass('active');
         $(this).find('i').addClass('fa-angle-down').removeClass('fa-angle-right');
       }else {
        $('.accord_btn').removeClass('active');
        $('.accord_btn').find('i').removeClass('fa-angle-right').addClass('fa-angle-down');
        $(this).find('i').addClass('fa-angle-right').removeClass('fa-angle-down');
        $(this).addClass('active');
        $('.submenu_content').slideUp().removeClass('active');
        $(this).next('.submenu_content').slideDown().addClass('active');
       }
     })

    //  submenut content accoridan

     $('.sub_content_btn').click(function() {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next('.submenu_inr_content').slideUp()
        $(this).find('i').addClass('fa-angle-down').removeClass('fa-angle-right');
      }else {
       $('.submenu_content li a').removeClass('active');
       $('.submenu_content li a').find('i').removeClass('fa-angle-right').addClass('fa-angle-down');
       $(this).find('i').addClass('fa-angle-right').removeClass('fa-angle-down');
       $(this).addClass('active');
       $('.submenu_inr_content').slideUp().removeClass('active');
       $(this).next('.submenu_inr_content').slideDown();
      }
    })

  }

}
