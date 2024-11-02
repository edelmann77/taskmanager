import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../services/taskservice';
import { Status } from '../../../types/status';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../../types/task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'edit-dialog',
  templateUrl: './editdialog.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class EditDialogComponent {
  readonly dialogRef = inject(MatDialogRef<EditDialogComponent>);
  readonly taskService = inject(TaskService);
  readonly snackbar = inject(MatSnackBar);

  readonly data = inject<{ task?: Task } | undefined>(MAT_DIALOG_DATA);
  readonly title = model(this.data?.task?.title ?? '');
  readonly description = model(this.data?.task?.description ?? '');
  readonly status = model(this.data?.task?.status ?? '');

  context = signal(() => (this.data?.task ? 'Edit' : 'Create'));

  onCancelClicked = () => {
    this.dialogRef.close();
  };

  onDeleteClicked = () => {
    const task = this.data?.task;
    if (task) {
      this.taskService.deleteTask(task.id);
    }

    this.dialogRef.close();

    this.openSnackbar('Task deleted');
  };

  onCreateClicked = () => {
    this.taskService.createNewTask(
      this.title(),
      this.description(),
      (this.status() as Status) ?? undefined
    );

    this.dialogRef.close();
    this.openSnackbar('Task created');
  };

  onSaveClicked = () => {
    const task = this.data?.task;
    if (task) {
      this.taskService.updateTask(task.id, {
        description: this.description(),
        title: this.title(),
        status: this.status() as Status,
      });
    }

    this.dialogRef.close();
    this.openSnackbar('Task updated');
  };

  openSnackbar = (message: string) => {
    this.snackbar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  };
}
