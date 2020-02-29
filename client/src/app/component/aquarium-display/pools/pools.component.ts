import { Component, OnInit } from '@angular/core';
import {SectorService} from '../../../services/sector.service';
import {Pool} from '../../../entities/pool.entitie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.css']
})

export class PoolsComponent implements OnInit {

  listOfPool: Pool[];

  constructor(
    private sectorService: SectorService,
    private activateRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getPoolsFromRoute();
  }

  getPoolsFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getPoolsByIdSector(param.id);
    });
  }

  getPoolsByIdSector(sectorId: number) {
    this.sectorService.findAllPoolsBySectorId(sectorId).subscribe(response => {
      this.listOfPool = response.body; } );
  }

}
