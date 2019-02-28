import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-comp',
  templateUrl: './footer-comp.component.html',
  styleUrls: ['./footer-comp.component.css']
})
export class FooterCompComponent implements OnInit {

  constructor() { }
  logo_link="assets/images/cbz-logo.png";
  ngOnInit() {
  }

}
