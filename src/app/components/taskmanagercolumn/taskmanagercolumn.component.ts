import { Component, Input } from '@angular/core';
import { Column } from '../../../types/column';
import { TaskManagerColumnHeaderComponent } from '../taskmanagercolumnheader/taskmanagercolumnheader-component';

@Component({
  selector: 'task-manager-column',
  standalone: true,
  imports: [TaskManagerColumnHeaderComponent],
  templateUrl: './taskmanagercolumn.component.html',
})
export class TaskManagerColumnComponent {
  @Input() columnType: Column = 'Todo' as Column;
}
