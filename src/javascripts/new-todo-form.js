import moment from 'moment';
import Todo from './todo';

export default class NewTodoForm {
  constructor(todosDOM, todosStorage, modalBox, deadlineCheckbox) {
    this.todosDOM = todosDOM;
    this.todosStorage = todosStorage;
    this.modalBox = modalBox;
    this.deadlineCheckbox = deadlineCheckbox;
    this.form = document.getElementById('new-todo-form');

    this.form.addEventListener('submit', (e) => this.onSubmit(e));
  }

  onSubmit(e) {
    e.preventDefault();

    const title = this.form.title.value;
    const content = this.form.content.value;

    const withDeadline = this.deadlineCheckbox.checked;
    const day = this.form.day.value;
    const month = this.form.month.value;
    const year = this.form.year.value;

    if (title.length === 0) {
      this.modalBox.show('Invalid title value', 'Title length must be greater than zero.');
      return;
    }

    if (content.length === 0) {
      this.modalBox.show('Invalid content value', 'Content length must be greater than zero.');
      return;
    }

    let todo;
    const id = NewTodoForm.generateId();

    if (withDeadline) {
      const deadline = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY');

      if (!deadline.isValid()) {
        this.modalBox.show('Invalid date format', 'Something is wrong with the format of the date you passed.');
        return;
      }

      if (!deadline.isAfter()) {
        this.modalBox.show('Invalid date value', 'Your deadline should be set to tomorrow or later.');
        return;
      }

      todo = new Todo(id, title, content, deadline);
    } else {
      todo = new Todo(id, title, content);
    }

    this.todosDOM.add(todo);
    this.resetForm();
  }

  resetForm() {
    this.form.title.value = '';
    this.form.content.value = '';

    this.deadlineCheckbox.checked = false;
    this.form.day.value = '';
    this.form.month.value = '';
    this.form.year.value = '';
  }

  static generateId() {
    return moment().valueOf();
  }
}
