import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/taskservice';
import { Task } from '../../../types/task';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../editdialog/editdialog.compontent';

@Component({
  selector: 'task-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './taskitem.component.html',
})
export class TaskItemComponent {
  @Input() task: Task | undefined;

  readonly taskService = inject(TaskService);
  readonly dialog = inject(MatDialog);

  onClick = () => {
    if (this.task) {
      this.dialog.open(EditDialogComponent, { data: { task: this.task } });
    }
  };
}
