export class Species {
  constructor(
    public  id?: number,
    public lifeExpectancy?: number,
    public diet?: string,
    public isThreat?: boolean,
    public threatLevel?: number
  ) {}
}
