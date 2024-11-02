import { Selector } from 'testcafe';

export class TaskManagerPage {
  public titleSection = (taskTitle: string) =>
    Selector('div').withExactText(taskTitle);
  public columnHeaderSection = (taskTitle: string) =>
    this.titleSection(taskTitle).parent().parent().parent();
  public titleInput = (inputText: string) =>
    Selector('input').withAttribute('ng-reflect-model', inputText);
  public dialogSaveButton = Selector('#save-button');
}
