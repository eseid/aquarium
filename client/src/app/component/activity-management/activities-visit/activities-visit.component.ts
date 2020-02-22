import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-activities-visit',
  templateUrl: './activities-visit.component.html',
  styleUrls: ['./activities-visit.component.css']
})
export class ActivitiesVisitComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();
  }

  reset() {
    this.wowService.init();
  }

}
