import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent {
  @Input() taskItem: any;
  @Output() hatao = new EventEmitter()
  onRemove(tid: number): void {
    this.hatao.emit(tid);
  }
}
