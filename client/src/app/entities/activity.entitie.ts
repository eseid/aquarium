export class Activity {
  constructor(
    public id?: number,
    public type?: string,
    public activityDate?: Date,
    public isPublic?: boolean,
    public descriptionActivity?: string
  ) {}
}
