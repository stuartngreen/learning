export class ToDo {

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public createdBy: string,
    public createdAt: Date,
    public dueDate: Date,
    public priority: number,
    public status: string | number
  ) {
  }

}
