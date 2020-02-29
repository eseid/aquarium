import {Component, Input, OnInit} from '@angular/core';
import {Sector} from '../../../../entities/sector.entitie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SectorService} from '../../../../services/sector.service';
import {EventManagerService} from '../../../../services/event-manager.service';

@Component({
  selector: 'app-sectors-form',
  templateUrl: './sectors-form.component.html',
  styleUrls: ['./sectors-form.component.css']
})
export class SectorsFormComponent implements OnInit {

  @Input() sector: Sector;

  fileUpload: any

  constructor(
    private sectorService: SectorService,
    public activeModal: NgbActiveModal,
    private eventManager: EventManagerService
  ) {}

  ngOnInit() {
    this.fileUpload = [];
    if (this.sector.id) {
      this.fileUpload.push({
        'preview': this.sector.picture
      });
    }
  }

  save() {
    if (this.fileUpload.length > 0) {
      this.sector.picture = this.fileUpload[0].preview;
    }
    if (this.sector.id) {
      this.sectorService.update(this.sector).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'update');
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.sectorService.save(this.sector).subscribe(response => {
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
    this.eventManager.broadcast({ name: 'refresh-sectors-list', content: content});
  }

}
