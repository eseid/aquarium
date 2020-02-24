import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Animal} from '../../../../entities/animal.entitie';
import {AnimalService} from '../../../../services/animal.service';
import {EventManagerService} from '../../../../services/event-manager.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() animal: Animal;

  constructor(
    public activeModal: NgbActiveModal,
    private animalService: AnimalService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
    console.log(this.animal);
  }

  delete() {
    this.animalService.deleteById(this.animal.id).subscribe(response => {
      this.broadcastRefreshProductList(this.animal, 'delete');
      this.activeModal.close();
    }, error => console.log(error));
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-animals-list', content: content});
  }

}
