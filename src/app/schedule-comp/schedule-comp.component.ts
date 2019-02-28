import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-schedule-comp',
  templateUrl: './schedule-comp.component.html',
  styleUrls: ['./schedule-comp.component.css']
})
export class ScheduleCompComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title:'SCTPL';
  
  apiData : String[];
  ngOnInit() {
    this.http.get('https://cricapi.com/api/matchCalendar?apikey=yVPEhpG31SU3LasIQ7WwT82ZhR53')
    .subscribe(result =>{
     this.apiData=result as string[];
     console.log(result);
    }, error =>  console.log("error encountered") )

    
  }

}
