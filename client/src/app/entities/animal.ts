export class Animal {
  constructor(
    public id?: number,
    public name?: number,
    public sexe?: string,
    public destinctiveSign?: string,
    public checkinDate?: Date,
    public checkoutDate?: Date,
    public pool?: any, // tu dois définir la classe pool et species après (TS : c'est un langage orienté objet)
    public species?: any
  ) {}
}
