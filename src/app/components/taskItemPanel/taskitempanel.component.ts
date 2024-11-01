import { Component, inject, Input, signal } from '@angular/core';
import {
  CdkDropList,
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Status } from '../../../types/status';
import { TaskService } from '../../services/taskservice';
import { TaskItemComponent } from '../taskitem/taskitem.component';

@Component({
  selector: 'task-item-panel',
  standalone: true,
  imports: [CdkDropList, CdkDrag, TaskItemComponent],
  templateUrl: './taskitempanel.component.html',
})
export class TaskItemPanelComponent {
  @Input() columnType: Status = 'Todo';

  readonly taskService = inject(TaskService);

  tasks = signal(() => this.taskService.tasksByStatus(this.columnType));

  drop(event: CdkDragDrop<Status[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(this.tasks()(), event.previousIndex, event.currentIndex);
    } else {
      const moveTo = event.container.data[0];
      const moveFrom = event.previousContainer.data[0];

      if (this.taskService.canMove(moveFrom, moveTo)) {
        this.taskService.updateTask(event.item.data.id, { status: moveTo });
      }
    }
  }
}
