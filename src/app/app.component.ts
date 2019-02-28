import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cricbuzz-Demo-App';
  logo_link="assets/images/cbz-logo.png";
  public headerNames=["Home","Live Scores","Schedule","Q and A","Teams","Videos","Rankings"];
  public dropdowns=["All Stories","Latest News","Topics","SpotLight","Opinions","Specials"];
  public secondHeaders=["Featured","International","England Tour of WI","Aus tour of Ind"];

}
