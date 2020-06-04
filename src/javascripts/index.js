import Datetime from './datetime';
import DeadlineCheckbox from './deadline-checkbox';
import TodosStorage from './todos-storage';
import TodosDOM from './todos-dom';
import ModalBox from './modal-box';
import NewTodoForm from './new-todo-form';

/* eslint-disable no-unused-vars */

window.addEventListener('load', () => {
  const datetime = new Datetime();
  const deadlineCheckbox = new DeadlineCheckbox();

  const todosStorage = new TodosStorage();
  const todosDOM = new TodosDOM(todosStorage);
  const modalBox = new ModalBox();
  const newTodoForm = new NewTodoForm(todosDOM, todosStorage, modalBox);
});

/* eslint-enable no-unused-vars */
