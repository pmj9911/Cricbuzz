import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-score-comp',
  templateUrl: './card-score-comp.component.html',
  styleUrls: ['./card-score-comp.component.css']
})
export class CardScoreCompComponent implements OnInit {

  constructor() { }

  card1Link="https://www.cricbuzz.com/live-cricket-scores/20793/nz-vs-ban-3rd-odi-bangladesh-tour-of-new-zealand-2019";
  card2Link="https://www.cricbuzz.com/live-cricket-scores/21262/wi-vs-eng-2nd-odi-england-tour-of-west-indies-2019";
  card3Link="https://www.cricbuzz.com/live-cricket-scores/22238/indw-vs-engw-1st-odi-icc-championship-match-england-women-tour-of-india-2019"
  card4link="https://www.cricbuzz.com/live-cricket-scores/21647/afg-vs-ire-2nd-t20i-afghanistan-v-ireland-in-india-2019";
  ngOnInit() {
  }

}
