import {Component, Input, OnInit} from '@angular/core';
import {Species} from '../../../../entities/species.entitie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PoolService} from '../../../../services/pool.service';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Role} from '../../../../entities/role.entitie';
import {RoleService} from '../../../../services/role.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input()  role: Role;

  constructor(
    public activeModal: NgbActiveModal,
    private roleService: RoleService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
    console.log(this.role);
  }

  delete() {
    this.roleService.deleteById(this.role.id).subscribe(response => {
      this.broadcastRefreshProductList(this.role, 'delete');
      this.activeModal.close();
    }, error => console.log(error));
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-roles-list', content: content});
  }

}
