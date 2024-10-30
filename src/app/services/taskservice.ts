import { Task } from '../../types/task';
import { Status } from '../../types/status';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      createdAt: new Date(),
      id: '1',
      status: 'Todo',
      title: 'Present taskmanager application',
    },
    {
      createdAt: new Date(),
      id: '2',
      status: 'In Progress',
      title: 'Make items dragndroppable',
    },
    {
      createdAt: new Date(),
      id: '3',
      status: 'Completed',
      title: 'Create columns',
    },
    {
      createdAt: new Date(),
      id: '4',
      status: 'Completed',
      title: 'Create task items',
    },
  ];

  tasksByStatus = (status: Status) => {
    return this.tasks.filter((task) => task.status === status);
  };

  canMove = (from: Status, to: Status): boolean => {
    switch (from) {
      case 'Todo': {
        return to === 'In Progress';
      }
      case 'In Progress': {
        return to === 'Completed';
      }
      case 'Completed': {
        return false;
      }
    }
  };

  updateStatus = (taskId: string, status: Status) => {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = status;
    }
  };
}
