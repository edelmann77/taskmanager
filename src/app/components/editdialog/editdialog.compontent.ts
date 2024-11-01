import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/taskservice';
import { Status } from '../../../types/status';

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
    ReactiveFormsModule,
  ],
})
export class EditDialogComponent {
  readonly dialogRef = inject(MatDialogRef<EditDialogComponent>);
  readonly taskService = inject(TaskService);

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('Todo'),
  });

  onCancelClicked = () => {
    this.dialogRef.close();
  };

  onDeleteClicked = () => {
    //delete
    this.dialogRef.close();
  };

  handleSubmit = () => {
    this.taskService.createNewTask(
      this.taskForm.value.title ?? '',
      this.taskForm.value.description ?? '',
      (this.taskForm.value.status as Status) ?? undefined
    );

    this.dialogRef.close();
  };
}
