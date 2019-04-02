import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../entities/to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public toDoData: ToDo;

  @Output()
  public toDoEmitter = new EventEmitter();

  constructor(private toDoService: ToDoService) { }

  public onDeleteClick(): void {
    this.toDoService.deleteOne(this.toDoData.id).subscribe();
  }

  public onEditClick(): void {
    this.toDoEmitter.emit(this.toDoData);
  }

}
