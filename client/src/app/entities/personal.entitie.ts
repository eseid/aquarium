import {Role} from './role.entitie';

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
    public email?: string,
    public password?: string
  ) {}
}
