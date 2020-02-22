import {Role} from './role.entitie';
import {Pool} from './pool.entitie';
import {Activity} from './activity.entitie';
import {Sector} from "./sector.entitie";

export class Personal {

  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public address?: string,
    public birthDay?: Date,
    public socialSecurityNumber?: string,
    public listOfRoles?: Role[],
    public listOfActivity?: Activity[],
    public sectorsList?: Sector[],
  ) {}
}
