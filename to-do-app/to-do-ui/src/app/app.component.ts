import { Component, OnInit } from '@angular/core';
import { ToDo } from './entities/to-do';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public toDos: ToDo[];
  public updateToDo: ToDo;
  public isUpdatingToDo = false;

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoService.getAllToDos()
      .subscribe(toDosFromApi => {
        this.toDos = toDosFromApi;
      });
  }

  public setUpdateToDo(toDo: ToDo): void {
    this.updateToDo = toDo;
    this.isUpdatingToDo = true;
  }
}
