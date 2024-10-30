import { Component, computed, inject, Input } from '@angular/core';
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

  tasks = computed(() => this.taskService.tasksByStatus(this.columnType));

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks(), event.previousIndex, event.currentIndex);
  }
}
