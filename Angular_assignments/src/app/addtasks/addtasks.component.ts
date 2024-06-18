import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent {
  @Output() add = new EventEmitter;
  arr:any={id:'',desc:'',status:''} 
  AddTask(arr:any):void{
    this.add.emit(arr);
    this.arr={};
  }
}
