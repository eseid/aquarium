import {Pool} from './pool.entitie';
import {Species} from './species.entitie';

export class Animal {
  constructor(
    public id?: number,
    public name?: number,
    public sexe?: string,
    public destinctiveSign?: string,
    public checkinDate?: Date,
    public checkoutDate?: Date,
    public pool?: Pool,
    public species?: Species,
    public picture?: string
  ) {}
}
