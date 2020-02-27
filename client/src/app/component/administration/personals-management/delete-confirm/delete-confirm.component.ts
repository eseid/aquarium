import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../../../../entities/animal.entitie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AnimalService} from '../../../../services/animal.service';
import {EventManagerService} from '../../../../services/event-manager.service';
import {PersonalService} from '../../../../services/personal.service';
import {Personal} from '../../../../entities/personal.entitie';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() personal: Personal;

  constructor(
    public activeModal: NgbActiveModal,
    private personalService: PersonalService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.personalService.deleteById(this.personal.id).subscribe(response => {
      this.broadcastRefreshProductList(this.personal, 'delete');
      this.activeModal.close();
    }, error => console.log(error));
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-personals-list', content: content});
  }

}
