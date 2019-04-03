export class ToDo {

  constructor(
    public id: string = null,
    public title: string = null,
    public description: string = null,
    public createdBy: string = null,
    public createdAt: Date = null,
    public dueDate: Date = null,
    public priority: number = null,
    public status: number = null
  ) {
  }

}
