import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-live-scores-comp',
  templateUrl: './live-scores-comp.component.html',
  styleUrls: ['./live-scores-comp.component.css']
})
export class LiveScoresCompComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title:'SCTPL';
 
  apiData : String[];
  ngOnInit() {
    this.http.get('https://cricapi.com/api/matches?apikey=hPhA9oucE9hnpzELbgcqjO74dQg1')
    .subscribe(result =>{
     this.apiData=result as string[];
     console.log(result);
    }, error =>  console.log("error encountered") )
  }

}
