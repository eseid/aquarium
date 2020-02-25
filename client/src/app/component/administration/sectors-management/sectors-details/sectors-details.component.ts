import { Component, OnInit } from '@angular/core';
import {Animal} from '../../../../entities/animal.entitie';
import {ActivatedRoute} from '@angular/router';
import {AnimalService} from '../../../../services/animal.service';
import {Sector} from '../../../../entities/sector.entitie';
import {SectorService} from '../../../../services/sector.service';

@Component({
  selector: 'app-sectors-details',
  templateUrl: './sectors-details.component.html',
  styleUrls: ['./sectors-details.component.css']
})
export class SectorsDetailsComponent implements OnInit {

  sector: Sector;

  constructor(
    private activateRoute: ActivatedRoute,
    private sectorService: SectorService
  ) {
  }

  ngOnInit() {
    this.getSectorDetailsFromRoute();
  }

  getSectorDetailsFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getAnimalById(param['id']);
    });
  }

  getAnimalById(id: number) {
    this.sectorService.findById(id).subscribe(response => this.sector = response.body, error => console.log(error));
  }

}
