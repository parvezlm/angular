import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services = [
    { img: "/assets/img/icons/contract.png", content: "SMART CONTRACTS", content2: "DEVELOPMENT" },
    { img: "assets/img/icons/exchange.png", content: "EXCHANGES" },
    { img: "/assets/img/icons/block_devlp.png", content: "BLOCKCHAIN", content2: "DEVELOPMENT" },
    { img: "/assets/img/icons/hyperleader.png", content: "HYPERLEDGER" },
    { img: "/assets/img/icons/private_blockchain.png", content: "PRIVATE BLOCKCHAIN", content2: "DEVELOPMENT" },
    { img: "/assets/img/icons/wallet.png", content: "WALLET" },
  ];

  slides = [
    { img: "/assets/img/sliders/Real-Estate-Investment-Dropping.png", content1: "How Blockchain Technology", content2: " Will Fortify", content3: "Real Estate Industry" },
    { img: "/assets/img/sliders/cybercrime2.png", content1: "Blockchain Technology", content2: "Can Help", content3: "Fight Cyber Crimes" },
    { img: "/assets/img/sliders/businessman-business-sketch.png", content1: "Blockchain Technology", content2: "Contributing To", content3: "Research & Development" },
    { img: "/assets/img/sliders/Real-Estate-Investment-Dropping.png", content1: "How Blockchain Technology", content2: " Will Fortify", content3: "Real Estate Industry" },
    { img: "/assets/img/sliders/cybercrime2.png", content1: "Blockchain Technology", content2: "Can Help", content3: "Fight Cyber Crimes" },
    { img: "/assets/img/sliders/businessman-business-sketch.png", content1: "Blockchain Technology", content2: "Contributing To", content3: "Research & Development" },
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplaySpeed": 3000,
    "autoplay": true,
    "arrows": false,
    "responsive": [
      {
        'breakpoint': 561,
        'settings': {
          'slidesToShow': 2
        }
      }
    ]
  };


  contactForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      yname: ['',[Validators.required,Validators.maxLength(32),Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
      email:['',[Validators.required,Validators.email]],
      company:['',[Validators.required,Validators.pattern(/[!^\w\s]$/)]],
      ysubject:['',[Validators.required, Validators.maxLength(15)]],
      message: ['',[Validators.required,Validators.minLength(30),Validators.maxLength(150)]]
    });
  }

  ngOnInit(): void {
  }

  get userName() {
    return this.contactForm.get('yname');
  }
  get emails() {
    return this.contactForm.get('email');
  } 

  get companyName() {
    return this.contactForm.get('company');
  } 

  get subject() {
    return this.contactForm.get('ysubject');
  } 

  get messageTxt() {
    return this.contactForm.get('message');
  } 

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
  }
}

