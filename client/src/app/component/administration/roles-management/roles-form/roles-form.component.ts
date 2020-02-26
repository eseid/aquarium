import {Component, Input, OnInit} from '@angular/core';
import {Species} from '../../../../entities/species.entitie';
import {SpeciesService} from '../../../../services/species.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {RoleService} from '../../../../services/role.service';
import {Role} from '../../../../entities/role.entitie';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent implements OnInit {

  @Input() role: Role;

  constructor(
    private roleService: RoleService,
    public activeModal: NgbActiveModal,
    private eventManager: EventManagerService
  ) {}

  ngOnInit() {
  }

  save() {
    console.log(this.role);
    if (this.role.id) {
      this.roleService.update(this.role).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'update');
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.roleService.save(this.role).subscribe(response => {
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
    this.eventManager.broadcast({ name: 'refresh-roles-list', content: content});
  }

}
