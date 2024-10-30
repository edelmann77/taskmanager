import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'task-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './taskitem.component.html',
})
export class TaskItemComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() createdDate = '';
}
