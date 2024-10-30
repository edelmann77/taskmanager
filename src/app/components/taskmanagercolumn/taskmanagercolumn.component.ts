import { Component, signal, inject, Input } from '@angular/core';
import { Status } from '../../../types/status';
import { TaskManagerColumnHeaderComponent } from '../taskmanagercolumnheader/taskmanagercolumnheader-component';
import { TaskItemComponent } from '../taskitem/taskitem.component';
import { TaskService } from '../../services/taskservice';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-manager-column',
  standalone: true,
  imports: [
    TaskManagerColumnHeaderComponent,
    TaskItemComponent,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './taskmanagercolumn.component.html',
})
export class TaskManagerColumnComponent {
  @Input() columnType: Status = 'Todo' as Status;
  currentDate = new Date();

  taskService = inject(TaskService);

  tasks = signal(() => this.taskService.tasksByStatus(this.columnType));

  drop(event: CdkDragDrop<Status[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(this.tasks()(), event.previousIndex, event.currentIndex);
    } else {
      const moveTo = event.container.data[0];
      const moveFrom = event.previousContainer.data[0];

      if (this.taskService.canMove(moveFrom, moveTo)) {
        this.taskService.updateStatus(event.item.data.id, moveTo);
      }
    }
  }
}
