import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../../../../entities/animal.entitie';
import {Pool} from '../../../../entities/pool.entitie';
import {Species} from '../../../../entities/species.entitie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PoolService} from '../../../../services/pool.service';
import {SpeciesService} from '../../../../services/species.service';
import {AnimalService} from '../../../../services/animal.service';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Activity} from '../../../../entities/activity.entitie';
import {ActivityService} from '../../../../services/activity.service';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  @Input() activity: Activity;
  model: NgbDateStruct;

  constructor(
    public activeModal: NgbActiveModal,
    private activityService: ActivityService,
    private eventManager: EventManagerService,
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;

  save() {
    console.log(this.activity);
    if(this.model){
      var date: Date = new Date(this.model.year, this.model.month - 1, this.model.day);
      this.activity.activityDate = date;
    }
    if (this.activity.id) {
      this.activityService.update(this.activity).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'update');
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.activityService.save(this.activity).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'add');
        this.activeModal.close();
      }, error => console.log(error));
    }
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-activity-list', content: content});
  }
}
