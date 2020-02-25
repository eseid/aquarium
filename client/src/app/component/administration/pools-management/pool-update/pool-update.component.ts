import {Component, Input, OnInit} from '@angular/core';
import {Pool} from '../../../../entities/pool.entitie';
import {ActivatedRoute} from '@angular/router';
import {PoolService} from '../../../../services/pool.service';
import {Personal} from '../../../../entities/personal.entitie';
import {ToastrService} from 'ngx-toastr';
import {Activity} from '../../../../entities/activity.entitie';
import {SectorService} from '../../../../services/sector.service';
import {Sector} from '../../../../entities/sector.entitie';
import {PersonalService} from '../../../../services/personal.service';
import {ActivityService} from '../../../../services/activity.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';

@Component({
  selector: 'app-pool-update',
  templateUrl: './pool-update.component.html',
  styleUrls: ['./pool-update.component.css']
})
export class PoolUpdateComponent implements OnInit {


  @Input() pool: Pool;

  listOfSectors: Sector[];
  listOfPersonals: Personal[];
  listOfActivities: Activity[];
  activePersonal: boolean;
  activeActivities: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private poolService: PoolService,
    private eventManager: EventManagerService,
    private sectorService: SectorService,
    private personalService: PersonalService,
    private activityService: ActivityService,
    public activeModal: NgbActiveModal,
    private  toastr: ToastrService


  ) {
    this.activePersonal = false;
    this.activeActivities = false;
  }

  ngOnInit() {
        this.getListOfSectors(),
        this.getListOfPersonnals(),
        this.getListOfActivities()
  }

  activeSelectPersonal(){
    this.activePersonal = true;
  }

  activeSelectActivity(){
    this.activeActivities = true;
  }

  getListOfPersonnals() {
    this.personalService.findAll().subscribe(
      response => this.listOfPersonals = response.body,
      error => console.log(error)
    );
  }

  getListOfActivities() {
    this.activityService.findAll().subscribe(
      response => this.listOfActivities = response.body,
      error => console.log(error)
    );
  }

  deletePersonal(personal: Personal){
    if (personal.id === this.pool.responsible.id) {
      this.toastr.error('Vous ne pouvez pas supprimer ce personnel.');
    } else {
      const index: number = this.pool.listOfPersonals.indexOf(personal);
      if (index !== -1) {
        this.pool.listOfPersonals.splice(index, 1);
      }
    }
  }


  getListOfSectors() {
    this.sectorService.findAll().subscribe(
      response => this.listOfSectors = response.body,
      error => console.log(error)
    );
  }

  deleteActivity(activity: Activity){
    const indexActivity: number = this.pool.listOfActivities.indexOf(activity);
    if (indexActivity !== -1) {
      this.pool.listOfActivities.splice(indexActivity, 1);
    }
  }

  save() {
    if (this.pool.id) {
      this.poolService.update(this.pool).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'update');
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.poolService.save(this.pool).subscribe(response => {
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
    this.eventManager.broadcast({ name: 'refresh-pools-list', content: content});
  }



}
