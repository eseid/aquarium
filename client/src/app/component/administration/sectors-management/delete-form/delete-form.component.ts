import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../../../../entities/animal.entitie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AnimalService} from '../../../../services/animal.service';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Sector} from '../../../../entities/sector.entitie';
import {SectorService} from '../../../../services/sector.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent implements OnInit {

  @Input() sector: Sector;

  constructor(
    public activeModal: NgbActiveModal,
    private sectorService: SectorService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.sectorService.deleteById(this.sector.id).subscribe(response => {
      this.broadcastRefreshProductList(this.sector, 'delete');
      this.activeModal.close();
    }, error => console.log(error));
  }

  broadcastRefreshProductList(data, action) {
    const content = {
      'action': action,
      'data': data
    };
    this.eventManager.broadcast({ name: 'refresh-sectors-list', content: content});
  }

}
