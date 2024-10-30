import { Component, Input } from '@angular/core';
import { Status } from '../../../types/status';

@Component({
  selector: 'task-manager-column-header',
  standalone: true,
  imports: [],
  templateUrl: './taskmanagercolumnheader.component.html',
})
export class TaskManagerColumnHeaderComponent {
  @Input() columnType: Status = 'Todo';
}
