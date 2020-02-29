import { Component, OnInit } from '@angular/core';
import {Sector} from "../../../entities/sector.entitie";
import {SectorService} from "../../../services/sector.service";

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  listOfSector: Sector[];

  constructor(
    private sectorService: SectorService,
  ) { }

  ngOnInit() {
    this.getAllSectors();
  }

  getAllSectors() {
    this.sectorService.findAll().subscribe(response => {
      this.listOfSector = response.body;
    });
  }

}
