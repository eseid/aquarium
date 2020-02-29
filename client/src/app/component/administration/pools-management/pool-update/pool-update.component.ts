import {Component, Input, OnInit} from '@angular/core';
import {Pool} from '../../../../entities/pool.entitie';
import {ActivatedRoute} from '@angular/router';
import {PoolService} from '../../../../services/pool.service';
import {Personal} from '../../../../entities/personal.entitie';
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
  activeResponsible: boolean;
  personalToAdd: Personal;
  activityToAdd: Activity;
  responsible: Personal;
  fileUpload: any

  constructor(
    private activateRoute: ActivatedRoute,
    private poolService: PoolService,
    private eventManager: EventManagerService,
    private sectorService: SectorService,
    private personalService: PersonalService,
    private activityService: ActivityService,
    public activeModal: NgbActiveModal,


  ) {
    this.activePersonal = false;
    this.activeActivities = false;
    this.activeResponsible = false;

  }

  ngOnInit() {
        this.getListOfSectors();
        this.getListOfPersonnals();
        this.getListOfActivities();
          this.initPool();
    this.fileUpload = [];
    if (this.pool.id) {
      this.fileUpload.push({
        'preview': this.pool.picture
      });
    }

  }

  initPool(){
    if (!this.pool.listOfPersonals){
      this.pool.listOfPersonals = [];
    }
  }

  activeSelectPersonal(){
    if(this.activePersonal){
      this.activePersonal = false;
    }else{
      this.activePersonal = true;
    }
  }

  activeSelectActivity(){
    if(this.activeActivities){
      this.activeActivities = false;
    }else{
      this.activeActivities = true;
    }
  }

  activeSelectResponsible(){
    this.activeResponsible = true;
  }

  addPersonal(){
    if(this.personalToAdd) {
      if (this.pool.listOfPersonals) {
        this.pool.listOfPersonals.push(this.personalToAdd);
      } else {
        var personals: Personal[] = [];
        personals.push(this.personalToAdd);
        this.pool.listOfPersonals = personals;
      }
    }
  }

  addActivity(){
    if(this.pool.listOfActivities){
      this.pool.listOfActivities.push(this.activityToAdd);
    } else {
      var ativities: Activity[] = [];
      ativities.push(this.activityToAdd);
      this.pool.listOfActivities = ativities;
    }
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
    if (this.fileUpload.length > 0) {
      this.pool.picture = this.fileUpload[0].preview;
    }
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
