import {Component, Input, OnInit} from '@angular/core';
import {Pool} from '../../../../entities/pool.entitie';
import {Activity} from '../../../../entities/activity.entitie';
import {Personal} from '../../../../entities/personal.entitie';
import {Sector} from '../../../../entities/sector.entitie';
import {PoolService} from '../../../../services/pool.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivityService} from '../../../../services/activity.service';
import {PersonalService} from '../../../../services/personal.service';
import {SectorService} from '../../../../services/sector.service';
import { ToastrService } from 'ngx-toastr';
import {Animal} from '../../../../entities/animal.entitie';
import {ActivatedRoute} from '@angular/router';
import {AnimalService} from '../../../../services/animal.service';


@Component({
  selector: 'app-pool-detail',
  templateUrl: './pool-detail.component.html',
  styleUrls: ['./pool-detail.component.css']
})
export class PoolDetailComponent implements OnInit {


  pool: Pool;

  constructor(
    private activateRoute: ActivatedRoute,
    private poolService: PoolService
  ) {
    this.pool = new Pool();
  }

  ngOnInit() {
    this.getAnimalDetailsFromRoute();
  }

  getAnimalDetailsFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getPoolById(param['id']);
    });
  }

  getPoolById(id: number) {
    this.poolService.findById(id).subscribe(response => this.pool = response.body, error => console.log(error));
  }






  /*
  @Input() pool: Pool;

  listOfActivities: Activity[];
  listOfPersonals: Personal[];
  listOfSectors: Sector[];
  columnLabelsPersonal: string[];
  columnLabelsActivities: string[];



  constructor(
    private poolService: PoolService,
    public activeModal: NgbActiveModal,
    private activityService: ActivityService,
    private personalService: PersonalService,
    private sectorService: SectorService,
    private toastr: ToastrService
  ) {
    this.columnLabelsPersonal = ['#', 'Nom', 'Prénom', 'Adresse', 'Date de naissance', 'Roles'];
    this.columnLabelsActivities = ['#', 'Type', 'Date de l\'activité', 'Publique', 'Déscription'];
  }

  ngOnInit() {
    this.getListOfActivities();
    this.getListOfSectors();
    this.getListOfPersonals();
    console.log(this.pool);
    console.log(this.pool.responsible);
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

  getListOfPersonals() {
    this.personalService.findAll().subscribe(
      response => this.listOfPersonals = response.body,
      error => console.log(error)
    );
  }

  deleteActivity(activity: Activity) {

  }

  deletePersonal(personal: Personal) {
    if (personal.id === this.pool.responsible.id) {
      this.toastr.error('Vous ne pouvez pas supprimer ce personnel.');
    } else {
      const index: number = this.pool.listOfPersonals.indexOf(personal);
      if (index !== -1) {
        this.pool.listOfPersonals.splice(index, 1);
      }
      this.poolService.update(this.pool).subscribe(
        response => console.log(response.body),
        error => console.log(error)
      );
      this.toastr.success('le personnel a bien été supprimé');

    }

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
  */



}
