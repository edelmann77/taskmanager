import { Component } from '@angular/core';
import { TaskManagerColumnComponent } from '../taskmanagercolumn/taskmanagercolumn.component';

@Component({
  selector: 'task-manager',
  standalone: true,
  imports: [TaskManagerColumnComponent],
  templateUrl: './taskmanager.component.html',
})
export class TaskManagerComponent {}
