import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {

  constructor(private http: HttpClient) { }
   public SAHeading="https://www.cricbuzz.com/cricket-news/106746/batting-adversities-root-cause-of-south-africa-cricket-teams-durban-shock" ;

   public subtitle1="https://www.cricbuzz.com/cricket-news/106724/india-cricket-failure-gets-martin-guptill-to-rectify-errors-new-zealand-cricket";

   public subtitle2="https://www.cricbuzz.com/cricket-news/106748/tamim-iqbal-bangladesh-cricket-team-new-zealand-tour-2019";
    
   public subtitle3="https://www.cricbuzz.com/cricket-news/106750/excited-adil-rashid-awaits-gayle-challenge";

   public articleimage1="assets/images/faf.jpeg";

    ngOnInit(){}
    

}