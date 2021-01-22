import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as labelData from "../../constants/labels.json";

@Component({
  selector: 'app-mission-info',
  templateUrl: './mission-info.component.html',
  styleUrls: ['./mission-info.component.css']
})
export class MissionInfoComponent implements OnInit {
  public labelData = labelData.default;
  @Input() missionData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
