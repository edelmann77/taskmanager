import { Selector } from 'testcafe';
import { TaskManagerPage } from './pages/taskmanager.page';
fixture('Task Manager').page('http://localhost:4200/');

test('Can edit a task', async (t) => {
  const taskManagerPage = new TaskManagerPage();
  await t
    .click(taskManagerPage.titleSection('Make items dragndroppable'))
    .typeText(
      taskManagerPage.titleInput('Make items dragndroppable'),
      'This is a new title',
      { replace: true }
    )
    .click(taskManagerPage.dialogSaveButton)
    .expect(taskManagerPage.titleSection('This is a new title').exists)
    .ok();
});
