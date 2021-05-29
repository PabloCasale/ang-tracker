import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  private showAddtask: boolean = false;
  private subject = new Subject<any>();

  toggleAddTask(): void {
    this.showAddtask = !this.showAddtask;
    this.subject.next(this.showAddtask);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
  }

}
