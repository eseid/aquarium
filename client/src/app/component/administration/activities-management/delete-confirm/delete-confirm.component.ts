import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../../../../entities/animal.entitie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AnimalService} from '../../../../services/animal.service';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Activity} from '../../../../entities/activity.entitie';
import {ActivityService} from '../../../../services/activity.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    public activeModal: NgbActiveModal,
    private activityService: ActivityService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
    console.log(this.activity);
  }

  delete() {
    this.activityService.deleteById(this.activity.id).subscribe(response => {
      this.broadcastRefreshProductList(this.activity, 'delete');
      this.activeModal.close();
    }, error => console.log(error));
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-activity-list', content: content});
  }

}
