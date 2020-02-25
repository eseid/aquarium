import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Animal} from '../../../../entities/animal.entitie';
import {AnimalService} from '../../../../services/animal.service';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Pool} from '../../../../entities/pool.entitie';
import {PoolService} from '../../../../services/pool.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() pool: Pool;

  constructor(
    public activeModal: NgbActiveModal,
    private poolService: PoolService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
    console.log(this.pool);
  }

  delete() {
    this.poolService.deleteById(this.pool.id).subscribe(response => {
      this.broadcastRefreshProductList(this.pool, 'delete');
      this.activeModal.close();
    }, error => console.log(error));
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-pools-list', content: content});
  }

}
