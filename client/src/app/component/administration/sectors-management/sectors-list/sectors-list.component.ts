import { Component, OnInit } from '@angular/core';
import {Sector} from '../../../../entities/sector.entitie';
import {SectorService} from "../../../../services/sector.service";
import {Animal} from "../../../../entities/animal.entitie";
import {AnimalService} from "../../../../services/animal.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AnimalFormComponent} from "../../animals-management/animal-form/animal-form.component";
import {MODAL_OPTIONS} from "../../../../utils/app.const";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Pool} from "../../../../entities/pool.entitie";
import {SectorFormComponent} from "../sector-form/sector-form.component";

@Component({
  selector: 'app-sectors-list',
  templateUrl: './sectors-list.component.html',
  styleUrls: ['./sectors-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SectorsListComponent implements OnInit {
  columnLabels: string[];

  columnsToDisplay = ['id', 'name', 'location'];
  expandedElement: Sector | null;
  listOfSectors: Sector[];


  constructor(private sectorService: SectorService, private modalService: NgbModal) {
    this.columnLabels = ['id', 'name', 'location'];
  }

  ngOnInit() {
    this.findAllSectors();
  }

  private findAllSectors() {
    this.sectorService.findAll().subscribe(response => {
      this.listOfSectors = response.body;
      console.log(this.listOfSectors);
    });
  }

  private openSectorForm(sector: Sector) {
    const modalRef = this.modalService.open(SectorFormComponent, MODAL_OPTIONS);
    if (sector) {
      modalRef.componentInstance.sector = sector;
    } else {
      modalRef.componentInstance.sector = new Sector();
    }
  }

  private deleteAnimal(sector: Sector) {
    if (this.sectorService.deleteById(sector.id)) {
      console.log("deleted");
    } else {
      console.log("not deleted");
    }
  }

}
