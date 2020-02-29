import {Component, Input, OnInit} from '@angular/core';
import {Pool} from '../../../../entities/pool.entitie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PoolService} from '../../../../services/pool.service';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Species} from '../../../../entities/species.entitie';
import {SpeciesService} from '../../../../services/species.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input()  species: Species;

  constructor(
    public activeModal: NgbActiveModal,
    private speciesService: SpeciesService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
    console.log(this.species);
  }

  delete() {
    this.speciesService.deleteById(this.species.id).subscribe(response => {
      this.broadcastRefreshProductList(this.species, 'delete');
      this.activeModal.close();
    }, error => console.log(error));
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-species-list', content: content});
  }

}
