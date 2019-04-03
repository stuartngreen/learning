import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ToDo } from '../entities/to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public toDoData: ToDo;
  public viewToDo: ToDo;
  @Output() public toDoEmitter = new EventEmitter();

  constructor(private toDoService: ToDoService) {
  }

  public ngOnInit(): void {
    this.viewToDo = Object.assign({}, this.toDoData);
  }

  public onDeleteClick(): void {
    this.toDoService.deleteOne(this.toDoData.id).subscribe();
  }

  public onEditClick(): void {
    this.toDoEmitter.emit(this.toDoData);
  }

}
