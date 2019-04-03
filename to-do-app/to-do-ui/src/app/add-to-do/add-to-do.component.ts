import { Component, OnInit } from '@angular/core';
import { ToDo } from '../entities/to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  public newToDo: ToDo = new ToDo();

  constructor(private toDoService: ToDoService) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {

    this.newToDo.dueDate = new Date(this.newToDo.dueDate);
    this.newToDo.createdAt = new Date();
    this.newToDo.priority = Number(this.newToDo.priority);

    // data is now ready in the correct format, can be sent to API
    this.toDoService.insertOne(this.newToDo).subscribe();
  }

}
