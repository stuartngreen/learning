import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ToDo } from '../entities/to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-update-to-do',
  templateUrl: './update-to-do.component.html',
  styleUrls: ['./update-to-do.component.css']
})
export class UpdateToDoComponent implements OnInit {

  @Input() public updateToDo: ToDo;
  public foo: ToDo;

  constructor(private toDoService: ToDoService) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {

    this.updateToDo.dueDate = new Date(this.updateToDo.dueDate);
    this.updateToDo.createdAt = new Date(this.updateToDo.createdAt);
    this.updateToDo.status = Number(this.updateToDo.status);

    // data is now ready in the correct format, can be sent to API
    this.toDoService.updateOne(this.updateToDo).subscribe();

    console.log(this.updateToDo);
  }
}
