import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
tasks: any[] = [
    {
      id: 1,
      desc: 'Go to study',
      priority: 2,
      status: 'Completed'
    },
    {
      id: 2,
      desc: 'study angular',
      priority: 1,
      status: 'In Progress'
    },
    {
      id: 3,
      desc: 'go home',
      priority: 3,
      status: 'Pending'
    },
  ];
  RemoveByID(tid: number):void{
    debugger
    this.tasks = this.tasks.filter((a) => a.id != tid);
  }
  AddTask(addtask: any):void{
    this.tasks.push(addtask);

  }
}
