import {NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Nav} from './nav.entitie';

export const SERVER_URL = 'http://localhost:8080/api';

export const MODAL_OPTIONS: NgbModalOptions = {
  size: 'xl',
  scrollable: true,
  backdrop: 'static',
  keyboard: false
};

export const VISITOR_MENU: Nav[] = [
  {
    name: 'Home',
    path: '/home',
    classIcon: 'fa fa-home'
  },
  {
    name: 'Nos secteurs',
    path: '/aquarium/sectors',
    classIcon: 'fa fa-globe-africa'
  },
  {
    name: 'Nos Activités',
    path: '/aquarium/activities',
    classIcon: 'fa fa-tasks'
  },
  {
    name: 'Nos Pensionnaires',
    path: '/aquarium/animals',
    classIcon: 'fa fa-fish'
  }
];

export const RESPONSABLE_MENU: Nav[] = [
  {
    name: 'Home',
    path: '/home',
    classIcon: 'fa fa-home'
  },
  {
    name: 'Activités',
    path: '/activities-management',
    classIcon: 'fa fa-tasks'
  }
];
export const EMPLOYEE_MENU: Nav[] = [
  {
    name: 'Home',
    path: '/home',
    classIcon: 'fa fa-home'
  },
  {
    name: 'Nos Activités',
    path: '/aquarium/activities',
    classIcon: 'fa fa-tasks'
  },
];

export const ADMIN_MENU: Nav[] = [
  {
    name: 'Home',
    path: '/home',
    classIcon: 'fa fa-home'
  },
  {
    name: 'Bassins',
    path: '/pools-management',
    classIcon: 'fa fa-swimming-pool'
  },
  {
    name: 'Pentionnaires',
    path: '/animals-management',
    classIcon: 'fa fa fa-fish'
  },
  {
    name: 'Secteurs',
    path: '/sectors-management',
    classIcon: 'fa fa-globe-africa'
  },
  {
    name: 'Espèces',
    path: '/species-management',
    classIcon: 'fa fa-stream'
  },
  {
    name: 'Personels',
    path: '/personals-management',
    classIcon: 'fa fa-users'
  }
];
