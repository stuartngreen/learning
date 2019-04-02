import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../entities/to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-update-to-do',
  templateUrl: './update-to-do.component.html',
  styleUrls: ['./update-to-do.component.css']
})
export class UpdateToDoComponent implements OnInit {

  @Input()
  public updateToDo: ToDo;

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
  }

  public onSubmit(): void {

  }
}
