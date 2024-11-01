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
      description: 'Present taskmanager application to Lead developer @ Vestas',
    },
    {
      createdAt: new Date(),
      id: '2',
      status: 'In Progress',
      title: 'Make items dragndroppable',
      description:
        'We need to be able to drag and drop a task, so that we can change status',
    },
    {
      createdAt: new Date(),
      id: '3',
      status: 'Completed',
      title: 'Create columns',
      description:
        'Create 3 columns. 1 for each status. A column should act as a drop target.',
    },
    {
      createdAt: new Date(),
      id: '4',
      status: 'Completed',
      title: 'Create task items',
      description:
        'We need to be able to represent a task as an item in the UI',
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

  createNewTask = (title: string, description: string, status?: Status) => {
    this.tasks.push({
      title: title,
      description: description,
      status: status ?? 'Todo',
      id: `${new Date().getUTCMilliseconds()}`,
      createdAt: new Date(),
    });
  };

  updateTask = (taskId: string, toUpdate: Partial<Task>) => {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks[index] = { ...this.tasks[index], ...toUpdate };
  };

  deleteTask = (taskId: string) => {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(index, 1);
  };
}
