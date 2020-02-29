import { Component, OnInit } from '@angular/core';
import {Sector} from "../../../entities/sector.entitie";
import {SectorService} from "../../../services/sector.service";
import {Pool} from "../../../entities/pool.entitie";
import {PoolService} from "../../../services/pool.service";

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.css']
})
export class PoolsComponent implements OnInit {

  listOfPool: Pool[];

  constructor(
    private poolService: PoolService,
  ) { }

  ngOnInit() {
    this.getAllSectors()
  }

  getAllSectors(){
    this.poolService.findAll().subscribe(response => {
      this.listOfPool = response.body;
    });
  }
}
