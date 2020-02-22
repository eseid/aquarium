import {Component, Input, OnInit} from '@angular/core';
import {Pool} from "../../../entities/pool.entitie";
import {Activity} from "../../../entities/activity.entitie";
import {Personal} from "../../../entities/personal.entitie";
import {Sector} from "../../../entities/sector.entitie";
import {PoolService} from "../../../services/pool.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivityService} from "../../../services/activity.service";
import {PersonalService} from "../../../services/personal.service";
import {SectorService} from "../../../services/sector.service";

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit {
  @Input() sector: Sector;
  listOfSectors: Sector[];


  constructor(
    private sectorService: SectorService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit() {
    this.getListOfSectors();
    console.log(this.sector);
  }



  getListOfSectors() {
    this.sectorService.findAll().subscribe(
      response => this.listOfSectors = response.body,
      error => console.log(error)
    );
  }

  save() {
    if(this.sector.id){
      this.sectorService.update(this.sector).subscribe(response => {
        console.log(response.body);
        this.activeModal.close()
      }, error => console.log(error));
    } else {
      this.sectorService.save(this.sector).subscribe(response => {
        console.log(response.body);
        this.activeModal.close();
      }, error => console.log(error));
    }
  }



}
