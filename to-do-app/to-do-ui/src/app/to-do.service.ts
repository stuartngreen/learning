import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToDo } from './entities/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  public getAllToDos(): Observable<ToDo[]> {
    const toDosObservable = this.http
      .get('http://localhost:52038/todos/all')
      .pipe(
        map((toDos: any) =>
          toDos.map(
            toDo =>
              new ToDo(
                toDo.id,
                toDo.title,
                toDo.description,
                toDo.createdBy,
                toDo.createdAt,
                new Date(toDo.dueDate),
                toDo.priority,
                toDo.status
              )
          )
        )
    );

    return toDosObservable;
  }

  public insertOne(newToDo: ToDo): Observable<any> {
    delete newToDo.id;
    const insertObservable = this.http
      .post('http://localhost:52038/todos', newToDo);
    return insertObservable;
  }

  public deleteOne(id: string): Observable<any> {
    return this.http.delete('http://localhost:52038/todos/delete/' + id);
  }

  public updateOne(toDo: ToDo): Observable<any> {
    return this.http.put('http://localhost:52038/todos/update/' + toDo.id, toDo);
  }
}
