import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as labelData from '../../constants/labels.json';
@Component({
  selector: 'app-filter-info',
  templateUrl: './filter-info.component.html',
  styleUrls: ['./filter-info.component.css'],
})
export class FilterInfoComponent implements OnInit {
  public labelData = labelData.default;
  @Output() sendFilterData = new EventEmitter();
  public launchYears = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  public selectedYear = 0;
  public launchFilter = ['True', 'False'];
  public succuessLaunchFilter = '';
  public succuessLandFilter = '';
  public filterData = {
    launch_year: this.selectedYear,
    launch_success: this.succuessLaunchFilter,
    land_success: this.succuessLandFilter,
  };
  getEventId(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    return value;
  }
  getSuccessLaunch(event: any) {
    if (
      this.succuessLaunchFilter ==
      this.launchFilter[this.getEventId(event)].toLowerCase()
    ) {
      this.succuessLaunchFilter = '';
    } else {
      this.succuessLaunchFilter = this.launchFilter[
        this.getEventId(event)
      ].toLowerCase();
    }
    this.filterData.launch_success = this.succuessLaunchFilter;
    this.sendFilterData.emit(JSON.stringify(this.filterData));
  }
  getSuccessLand(event: any) {
    if (
      this.succuessLandFilter ==
      this.launchFilter[this.getEventId(event)].toLowerCase()
    ) {
      this.succuessLandFilter = '';
    } else {
      this.succuessLandFilter = this.launchFilter[
        this.getEventId(event)
      ].toLowerCase();
    }
    this.filterData.land_success = this.succuessLandFilter;
    this.sendFilterData.emit(JSON.stringify(this.filterData));
  }
  getYear(event: any) {
    if (this.selectedYear == this.launchYears[this.getEventId(event)]) {
      this.selectedYear = 0;
    } else {
      this.selectedYear = this.launchYears[this.getEventId(event)];
    }
    
    this.filterData.launch_year = this.selectedYear;
    
    this.sendFilterData.emit(JSON.stringify(this.filterData));
  }
  constructor() {}

  ngOnInit(): void {}
}
