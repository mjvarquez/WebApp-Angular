import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit {
  dataSource!: any;
  displayedColumns = ['surveyResult']

  constructor() { }

  ngOnInit(): void {
  }

}
