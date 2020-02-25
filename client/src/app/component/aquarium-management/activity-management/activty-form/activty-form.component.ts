import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../../entities/activity.entitie';
import {ActivityService} from '../../../../services/activity.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activty-form',
  templateUrl: './activty-form.component.html',
  styleUrls: ['./activty-form.component.css']
})
export class ActivtyFormComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    private activityService: ActivityService,
    public activeModal: NgbActiveModal,

) { }

  ngOnInit() {
  }

  save() {
    if (this.activity.id) {
      this.activityService.update(this.activity).subscribe(response => {
        console.log(response.body);
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.activityService.save(this.activity).subscribe(response => {
        console.log(response.body);
        this.activeModal.close();
      }, error => console.log(error));
    }
  }

}
