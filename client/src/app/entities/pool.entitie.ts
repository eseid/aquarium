import {Sector} from './sector.entitie';
import {Activity} from './activity.entitie';
import {Personal} from './personal.entitie';

export class Pool {
  constructor(
    public id?: number,
    public name?: string,
    public capacity?: number,
    public volume?: number,
    public state?: string,
    public sector?: Sector,
    public responsible?: Personal,
    public listOfActivities?: Activity[],
    public listOfPersonals?: Personal[]
  ) {}
}
