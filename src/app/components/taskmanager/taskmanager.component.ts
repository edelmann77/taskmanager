import { Component, inject } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TaskManagerColumnComponent } from '../taskmanagercolumn/taskmanagercolumn.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../services/taskservice';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../editdialog/editdialog.compontent';

@Component({
  selector: 'task-manager',
  standalone: true,
  imports: [
    TaskManagerColumnComponent,
    CdkDropListGroup,
    MatButtonModule,
    EditDialogComponent,
  ],
  templateUrl: './taskmanager.component.html',
})
export class TaskManagerComponent {
  readonly taskService = inject(TaskService);
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(EditDialogComponent);
  }
}
