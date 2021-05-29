import { Injectable } from '@angular/core';
import {Task} from 'src/app/Task'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:5000/tasks'

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}
