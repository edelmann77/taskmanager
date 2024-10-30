import { Task } from '../../types/task';
import { Status } from '../../types/status';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { createdAt: new Date(), id: '1', status: 'Todo', title: 'Task 1' },
    { createdAt: new Date(), id: '2', status: 'In Progress', title: 'Task 2' },
    { createdAt: new Date(), id: '3', status: 'Completed', title: 'Task 3' },
    { createdAt: new Date(), id: '4', status: 'Todo', title: 'Task 4' },
  ];

  tasksByStatus = (status: Status) => {
    return this.tasks.filter((task) => task.status === status);
  };
}
