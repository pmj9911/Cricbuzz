import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videos-comp',
  templateUrl: './videos-comp.component.html',
  styleUrls: ['./videos-comp.component.css']
})
export class VideosCompComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  videosData=[
    {
      link: "https://www.youtube.com/embed/oXdIlFbyfW8", desc:"India vs Australia T20I Series: Stats Preview",
    },
    {
      link:"https://www.youtube.com/embed/5mFve__eur8", desc:"Stranger XI S1E3: Who's the G.O.A.T in ODIs - Tendulkar or Kohli?",
    },
    {
      link: "https://www.youtube.com/embed/wRUM2kUqwVk", desc:"Stranger XI S1E2: Should Indian players skip some part of IPL ahead of 2019 WC?",
    },
    {
      link: "https://www.youtube.com/embed/glsk-Xf0XCA" , desc:"Cricbuzz LIVE: IND vs AUS, 2nd T20I, Pre-match show",
    },
    {
      link:"https://www.youtube.com/embed/nGbCRCzdQag", desc:"Hazratullah Zazai 162 Run Against Ireland | 2nd T20 |Afghanistan vs Ireland in India 2019",
    },
    {
      link: "https://www.youtube.com/embed/JHtgA-Im-Do", desc:"Stranger XI S1E4: Are T20s a threat to Test cricket?JHtgA-Im-Do",
    }, 
  ];
    
    ngOnInit(){}
  }

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(link) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
} 
