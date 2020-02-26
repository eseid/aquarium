import {Component, Input, OnInit} from '@angular/core';
import {Sector} from '../../../../entities/sector.entitie';
import {SectorService} from '../../../../services/sector.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {SpeciesService} from '../../../../services/species.service';
import {Species} from '../../../../entities/species.entitie';

@Component({
  selector: 'app-species-form',
  templateUrl: './species-form.component.html',
  styleUrls: ['./species-form.component.css']
})
export class SpeciesFormComponent implements OnInit {

  @Input() species: Species;

  constructor(
    private speciesService: SpeciesService,
    public activeModal: NgbActiveModal,
    private eventManager: EventManagerService
  ) {}

  ngOnInit() {
  }

  save() {
    console.log(this.species);
    if (this.species.id) {
      this.speciesService.update(this.species).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'update');
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.speciesService.save(this.species).subscribe(response => {
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
    this.eventManager.broadcast({ name: 'refresh-species-list', content: content});
  }

}
