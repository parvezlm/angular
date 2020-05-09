import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {img: "/assets/img/sliders/Real-Estate-Investment-Dropping.png", content1: "How Blockchain Technology",content2:" Will Fortify", content3:"Real Estate Industry"},
    {img: "/assets/img/sliders/cybercrime2.png", content1: "Blockchain Technology", content2:"Can Help", content3:"Fight Cyber Crimes"},
    {img: "/assets/img/sliders/businessman-business-sketch.png", content1: "Blockchain Technology",content2:"Contributing To", content3:"Research & Development"},
    {img: "/assets/img/sliders/Real-Estate-Investment-Dropping.png", content1: "How Blockchain Technology",content2:" Will Fortify", content3:"Real Estate Industry"},
    {img: "/assets/img/sliders/cybercrime2.png", content1: "Blockchain Technology", content2:"Can Help", content3:"Fight Cyber Crimes"},
    {img: "/assets/img/sliders/businessman-business-sketch.png", content1: "Blockchain Technology",content2:"Contributing To", content3:"Research & Development"},
  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1,"autoplaySpeed": 3000,"autoplay":true, "arrows":false};

}
