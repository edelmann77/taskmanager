import { TaskManagerPage } from './pages/taskmanager.page';
fixture('Task Manager').page('http://localhost:4200/');

test('can change status from Todo to In Progress', async (t) => {
  const taskManagerPage = new TaskManagerPage();
  await t
    .drag(
      taskManagerPage.titleSection('Present taskmanager application'),
      400,
      0
    )
    .expect(
      taskManagerPage.columnHeaderSection('Present taskmanager application').id
    )
    .eql('In Progress');
});
