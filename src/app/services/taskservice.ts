import { Task } from '../../types/task';
import { Status } from '../../types/status';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  searchString: string = '';

  readonly allTasks: Task[] = [
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

  tasksToDisplay = signal(() => {
    if (this.searchString === '') {
      return this.allTasks;
    }

    return this.allTasks.filter((task) => {
      return (
        task.title?.toLowerCase().includes(this.searchString.toLowerCase()) ||
        task.status.toLowerCase().includes(this.searchString.toLowerCase())
      );
    });
  });

  tasksByStatus = (status: Status) => {
    return this.tasksToDisplay()().filter((task) => task.status === status);
  };

  canMove = (from: Status | undefined, to: Status): boolean => {
    if (!from) {
      return true;
    }

    switch (from) {
      case 'Todo': {
        return to === 'In Progress' || to === 'Todo';
      }
      case 'In Progress': {
        return to === 'Completed' || to === 'In Progress';
      }
      case 'Completed': {
        return to === 'Completed';
      }
    }
  };

  createNewTask = (title: string, description: string, status?: Status) => {
    this.allTasks.push({
      title: title,
      description: description,
      status: status ?? 'Todo',
      id: `${new Date().getUTCMilliseconds()}`,
      createdAt: new Date(),
    });
  };

  updateTask = (
    taskId: string,
    toUpdate: Partial<Omit<Task, 'id' | 'createdAt'>>
  ) => {
    const index = this.allTasks.findIndex((task) => task.id === taskId);
    this.allTasks[index] = { ...this.allTasks[index], ...toUpdate };
  };

  deleteTask = (taskId: string) => {
    const index = this.allTasks.findIndex((task) => task.id === taskId);
    this.allTasks.splice(index, 1);
  };

  setSearchString = (searchString: string) => {
    this.searchString = searchString;
  };
}
