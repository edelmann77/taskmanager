import { TaskService } from './taskservice';

describe('TaskService', () => {
  let taskService = new TaskService();
  describe('tasksByStatus', () => {
    beforeEach(() => {
      taskService = new TaskService();
      taskService.allTasks.push(
        {
          createdAt: new Date(),
          id: '1000',
          status: 'Todo',
          title: 'Present taskmanager application',
          description:
            'Present taskmanager application to Lead developer @ Vestas',
        },
        {
          createdAt: new Date(),
          id: '2000',
          status: 'In Progress',
          title: 'Make items dragndroppable',
          description:
            'We need to be able to drag and drop a task, so that we can change status',
        },
        {
          createdAt: new Date(),
          id: '3000',
          status: 'Completed',
          title: 'Create columns',
          description:
            'Create 3 columns. 1 for each status. A column should act as a drop target.',
        }
      );
    });

    it('can filter by Todo status', () => {
      const filteredTasks = taskService.tasksByStatus('Todo');

      expect(
        filteredTasks.every((task) => task.status === 'Todo')
      ).toBeTruthy();
    });

    it('can filter by In Progress status', () => {
      const filteredTasks = taskService.tasksByStatus('In Progress');

      expect(
        filteredTasks.every((task) => task.status === 'In Progress')
      ).toBeTruthy();
    });

    it('can filter by Completed status', () => {
      const filteredTasks = taskService.tasksByStatus('Completed');

      expect(
        filteredTasks.every((task) => task.status === 'Completed')
      ).toBeTruthy();
    });
  });

  describe('canMove', () => {
    it('can move from Todo to In Progress', () => {
      const canMove = taskService.canMove('Todo', 'In Progress');
      expect(canMove).toBeTruthy();
    });
    it('can move from In Progress to Completed', () => {
      const canMove = taskService.canMove('In Progress', 'Completed');
      expect(canMove).toBeTruthy();
    });
    it('cannot move from Todo to Completed', () => {
      const canMove = taskService.canMove('Todo', 'Completed');
      expect(canMove).toBeFalsy();
    });
    it('cannot move from In Progress to Todo', () => {
      const canMove = taskService.canMove('In Progress', 'Todo');
      expect(canMove).toBeFalsy();
    });
    it('cannot move from Completed to Todo', () => {
      const canMove = taskService.canMove('Completed', 'Todo');
      expect(canMove).toBeFalsy();
    });
    it('cannot move from Completed to In Progress', () => {
      const canMove = taskService.canMove('Completed', 'In Progress');
      expect(canMove).toBeFalsy();
    });
  });

  describe('createNewTask', () => {
    it('can create a new task', () => {
      taskService.createNewTask('TestTitle', 'TestDescription', 'Todo');

      const filteredTasks = taskService.allTasks.filter(
        (task) =>
          task.title === 'TestTitle' &&
          task.description === 'TestDescription' &&
          task.status === 'Todo'
      );

      expect(filteredTasks.length === 1).toBeTruthy();
    });
  });

  describe('updateTask', () => {
    beforeEach(() => {
      taskService = new TaskService();
      taskService.allTasks.push({
        id: '1337',
        createdAt: new Date(),
        description: 'This is a description',
        status: 'Todo',
        title: 'This is a title',
      });
    });

    it('can update description', () => {
      taskService.updateTask('1337', {
        description: 'This is another description',
      });

      const task = taskService.allTasks.find((task) => task.id === '1337');

      expect(task?.description).toBe('This is another description');
      expect(task?.title).toBe('This is a title');
      expect(task?.status).toBe('Todo');
    });
    it('can update title', () => {
      taskService.updateTask('1337', {
        title: 'This is another title',
      });

      const task = taskService.allTasks.find((task) => task.id === '1337');

      expect(task?.description).toBe('This is a description');
      expect(task?.title).toBe('This is another title');
      expect(task?.status).toBe('Todo');
    });
    it('can update status', () => {
      taskService.updateTask('1337', {
        status: 'Completed',
      });

      const task = taskService.allTasks.find((task) => task.id === '1337');

      expect(task?.description).toBe('This is a description');
      expect(task?.title).toBe('This is a title');
      expect(task?.status).toBe('Completed');
    });
  });

  describe('deleteTask', () => {
    beforeEach(() => {
      taskService = new TaskService();
      taskService.allTasks.push({
        id: '1337',
        createdAt: new Date(),
        description: 'This is a description',
        status: 'Todo',
        title: 'This is a title',
      });
    });

    it('can delete tasks', () => {
      taskService.deleteTask('1337');

      const deletedTask = taskService.allTasks.find(
        (task) => task.id === '1337'
      );

      expect(deletedTask).toBeUndefined();
    });
  });
});
