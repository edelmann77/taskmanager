import { Component } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TaskManagerColumnComponent } from '../taskmanagercolumn/taskmanagercolumn.component';

@Component({
  selector: 'task-manager',
  standalone: true,
  imports: [TaskManagerColumnComponent, CdkDropListGroup],
  templateUrl: './taskmanager.component.html',
})
export class TaskManagerComponent {}
