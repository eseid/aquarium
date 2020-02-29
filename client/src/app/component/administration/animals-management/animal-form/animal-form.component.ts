import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AnimalService} from '../../../../services/animal.service';
import {Animal} from '../../../../entities/animal.entitie';
import {Pool} from '../../../../entities/pool.entitie';
import {Species} from '../../../../entities/species.entitie';
import {PoolService} from '../../../../services/pool.service';
import {SpeciesService} from '../../../../services/species.service';
import {EventManagerService} from '../../../../services/event-manager.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  @Input() animal: Animal;
  listOfPool: Pool[];
  listOfSpecies: Species[];
  fileUpload: any;

  constructor(
    public activeModal: NgbActiveModal,
    private poolService: PoolService,
    private specieisService: SpeciesService,
    private animalService: AnimalService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
    this.getListOfPools();
    this.getListOfSpecies();
    this.fileUpload = [];
    if (this.animal.id) {
      this.fileUpload.push({
        'preview': this.animal.picture
      });
    }
  }

  getListOfPools() {
    this.poolService.findAll().subscribe(
        response => this.listOfPool = response.body,
        error => console.log(error)
    );
  }

  getListOfSpecies() {
    this.specieisService.findAll().subscribe(
      response => {
        this.listOfSpecies = response.body;
        console.log(this.listOfSpecies);
      },
      error => console.log(error)
    );
  }

  save() {
    if(this.fileUpload.length > 0){
      this.animal.picture = this.fileUpload[0].preview;
    }
    if (this.animal.id) {
      this.animalService.update(this.animal).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'update');
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.animalService.save(this.animal).subscribe(response => {
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
    this.eventManager.broadcast({ name: 'refresh-animals-list', content: content});
  }
}
