import { Component } from '@angular/core';
import { TaskManagerComponent } from './components/taskmanager/taskmanager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskManagerComponent],
  template: '<task-manager>',
  styleUrl: './app.component.css',
})
export class AppComponent {}
