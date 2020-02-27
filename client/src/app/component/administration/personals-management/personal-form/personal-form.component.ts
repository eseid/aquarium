import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Role} from '../../../../entities/role.entitie';
import {PersonalService} from '../../../../services/personal.service';
import {Personal} from '../../../../entities/personal.entitie';
import {RoleService} from '../../../../services/role.service';


@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  @Input() personal: Personal;
  listOfRole: Role[];
  model: NgbDateStruct;
  activeRole: boolean;
  roleToAdd: Role;


  constructor(
    public activeModal: NgbActiveModal,
    private roleService: RoleService,
    private personalService: PersonalService,
    private eventManager: EventManagerService,
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
    this.getListORoles();
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;

  activeSelectRole(){
    if(this.activeRole){
      this.activeRole = false;
    }else{
      this.activeRole = true;
    }
  }

  addRole(){
    if(this.roleToAdd) {
      if (this.personal.listOfRoles) {
        this.personal.listOfRoles.push(this.roleToAdd);
      } else {
        var roles: Role[] = [];
        roles.push(this.roleToAdd);
        this.personal.listOfRoles = roles;
      }
    }
  }

  getListORoles() {
    this.roleService.findAll().subscribe(
      response => this.listOfRole = response.body,
      error => console.log(error)
    );
  }

  save() {
    if(this.model){
      var date: Date = new Date(this.model.year, this.model.month - 1, this.model.day);
      this.personal.birthDay = date;
    }
    if (this.personal.id) {
      this.personalService.update(this.personal).subscribe(response => {
        this.broadcastRefreshProductList(response.body, 'update');
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.personalService.save(this.personal).subscribe(response => {
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
    this.eventManager.broadcast({ name: 'refresh-personals-list', content: content});
  }
}
