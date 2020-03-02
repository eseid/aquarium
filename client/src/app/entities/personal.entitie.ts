import {Role} from './role.entitie';
import {Activity} from './activity.entitie';

export class Personal {

  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public sex?: string,
    public address?: string,
    public birthDay?: Date,
    public socialSecurityNumber?: string,
    public listOfRoles?: Role[],
    public listOfActivity?: Activity[],
    public email?: string,
    public password?: string
  ) {}
}
