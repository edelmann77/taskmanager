import { Component, signal, inject, Input } from '@angular/core';
import { Status } from '../../../types/status';
import { TaskManagerColumnHeaderComponent } from '../taskmanagercolumnheader/taskmanagercolumnheader-component';
import { TaskItemComponent } from '../taskitem/taskitem.component';
import { TaskItemPanelComponent } from '../taskItemPanel/taskitempanel.component';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-manager-column',
  standalone: true,
  imports: [
    TaskManagerColumnHeaderComponent,
    TaskItemComponent,
    CdkDropList,
    CdkDrag,
    TaskItemPanelComponent,
  ],
  templateUrl: './taskmanagercolumn.component.html',
})
export class TaskManagerColumnComponent {
  @Input() columnType: Status = 'Todo' as Status;
}
