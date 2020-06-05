import Datetime from './datetime';
import TodosStorage from './todos-storage';
import TodosDOM from './todos-dom';
import ModalBox from './modal-box';
import DeadlineCheckbox from './deadline-checkbox';
import NewTodoForm from './new-todo-form';

export default class IndexPage {
  constructor() {
    this.datetime = new Datetime();
    this.todosStorage = new TodosStorage();
    this.todosDOM = new TodosDOM(this.todosStorage);
    this.modalBox = new ModalBox();
    this.deadlineCheckbox = new DeadlineCheckbox();
    this.newTodoForm = new NewTodoForm(
      this.todosDOM, this.todosStorage, this.modalBox, this.deadlineCheckbox,
    );
  }
}
