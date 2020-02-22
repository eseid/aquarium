import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../../../entities/animal.entitie';
import {Pool} from '../../../entities/pool.entitie';
import {Species} from '../../../entities/species.entitie';
import {AnimalService} from '../../../services/animal.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PoolService} from '../../../services/pool.service';
import {SpeciesService} from '../../../services/species.service';
import {Activity} from '../../../entities/activity.entitie';
import {ActivityService} from '../../../services/activity.service';
import {PersonalService} from '../../../services/personal.service';
import {Personal} from '../../../entities/personal.entitie';
import {Sector} from '../../../entities/sector.entitie';
import {SectorService} from '../../../services/sector.service';

@Component({
  selector: 'app-pools-form',
  templateUrl: './pools-form.component.html',
  styleUrls: ['./pools-form.component.css']
})
export class PoolsFormComponent implements OnInit {
  @Input() pool: Pool;

  listOfPool: Pool[];
  listOfActivities: Activity[];
  listOfPersonals: Personal[];
  listOfSectors: Sector[];


  constructor(
    private poolService: PoolService,
    public activeModal: NgbActiveModal,
    private activityService: ActivityService,
    private personalService: PersonalService,
    private sectorService: SectorService
  ) {}

  ngOnInit() {
    this.getListOfPools();
    this.getListOfActivities();
    this.getListOfSectors();
    this.getListOfPersonnals();
    console.log(this.pool);
  }

  getListOfPools() {
    this.poolService.findAll().subscribe(
      response => this.listOfPool = response.body,
      error => console.log(error)
    );
  }

  getListOfActivities() {
    this.activityService.findAll().subscribe(
      response => this.listOfActivities = response.body,
      error => console.log(error)
    );
  }

getListOfSectors() {
  this.sectorService.findAll().subscribe(
    response => this.listOfSectors = response.body,
    error => console.log(error)
  );
}

getListOfPersonnals() {
  this.personalService.findAll().subscribe(
    response => this.listOfPersonals = response.body,
    error => console.log(error)
  );
}

save() {
    if (this.pool.id) {
      this.poolService.update(this.pool).subscribe(response => {
        console.log(response.body);
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.poolService.save(this.pool).subscribe(response => {
        console.log(response.body);
        this.activeModal.close();
      });
    }
}




}
