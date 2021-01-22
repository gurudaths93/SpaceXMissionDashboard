import {  Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { OnInit } from '@angular/core';
import * as labelData from "../constants/labels.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public missionData : any = [];
  public title:String = 'SpaceXDashboard';
  public labelData = labelData.default;
  public missionDataCopy:any = [];
  ngOnInit(): void {
     this.httpClient.get("https://api.spacexdata.com/v3/launches?limit=100").subscribe(data => {
      this.missionData = this.missionDataCopy = data;
    });
    this.missionDataCopy = this.missionData;
  }
  
  constructor(private httpClient:HttpClient){

  }
  clearData(){
    this.missionData = [];
  }
  getFilteredData(data:any){
    this.clearData();    
    this.missionData = this.missionDataCopy;
    this.missionData = this.missionData.filter(function(e:any){
      if(data.launch_year !=0){
        return e.launch_year == data.launch_year;
      }
      return true;
    }).filter(function(e:any){
      if(data.launch_success != ""){
        return e.launch_success.toString() == data.launch_success.toString();
      }
      return true;
    }).filter(function(e:any){
      if(data.land_success != ""){
        return e.rocket.first_stage.cores[0].land_success?.toString() == data.land_success.toString();
      }
      return true;
    });
  }
  dataFromChild(value:any){
    this.getFilteredData(JSON.parse(value));
  }
}
