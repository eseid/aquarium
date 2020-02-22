import { Component, OnInit } from '@angular/core';
import {Animal} from "../../../entities/animal.entitie";
import {AnimalService} from "../../../services/animal.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AnimalFormComponent} from "../../animals-management/animal-form/animal-form.component";
import {MODAL_OPTIONS} from "../../../utils/app.const";
import {PoolService} from "../../../services/pool.service";
import {Pool} from "../../../entities/pool.entitie";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PoolsFormComponent} from "../pools-form/pools-form.component";

@Component({
  selector: 'app-pools-list',
  templateUrl: './pools-list.component.html',
  styleUrls: ['./pools-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PoolsListComponent implements OnInit {

  columnsToDisplay = ['id', 'name', 'capacity', 'state', 'volume'];
  expandedElement: Pool | null;

  dataSource: Pool[];
  columnLabels: string[];

  constructor(private poolService: PoolService, private modalService: NgbModal) {
    this.columnLabels = ['#', 'capacity', 'stat', 'Volume', 'Sécteur_id', 'Activités', 'personnels'];
  }

  ngOnInit() {
    this.findAllPools();
  }

  private findAllPools() {
    this.poolService.findAll().subscribe(response => {
      this.dataSource = response.body;
      console.log(this.dataSource);
    });
  }

  private openPoolForm(pool: Pool) {
    const modalRef = this.modalService.open(PoolsFormComponent, MODAL_OPTIONS);
    if (pool) {
      modalRef.componentInstance.pool = pool;
    } else {
      modalRef.componentInstance.pool = new Pool();
    }
  }

  private deletePool(pool: Pool) {
    if (this.poolService.deleteById(pool.id)) {
      console.log("deleted");
    } else {
      console.log("not deleted");
    }
  }

}
