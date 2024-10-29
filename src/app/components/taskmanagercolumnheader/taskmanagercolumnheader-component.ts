import { Component, Input } from '@angular/core';
import { Column } from '../../../types/column';

@Component({
  selector: 'task-manager-column-header',
  standalone: true,
  imports: [],
  templateUrl: './taskmanagercolumnheader.component.html',
})
export class TaskManagerColumnHeaderComponent {
  @Input() columnType: Column = 'Todo';
}
