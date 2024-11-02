import { Component, inject } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TaskManagerColumnComponent } from '../taskmanagercolumn/taskmanagercolumn.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../services/taskservice';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../editdialog/editdialog.compontent';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'task-manager',
  standalone: true,
  imports: [
    TaskManagerColumnComponent,
    CdkDropListGroup,
    MatButtonModule,
    EditDialogComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './taskmanager.component.html',
})
export class TaskManagerComponent {
  readonly taskService = inject(TaskService);
  readonly dialog = inject(MatDialog);

  searchStringChanged = (event: any) => {
    const searchString = event?.target?.value;

    if (searchString !== undefined) {
      this.taskService.setSearchString(searchString);
    }
  };

  openDialog(): void {
    this.dialog.open(EditDialogComponent);
  }
}
