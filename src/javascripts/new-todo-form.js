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

    if (title.length === 0) {
      this.modalBox.show('Invalid title value', 'Title length must be greater than zero.');
      return;
    }

    const content = this.form.content.value;

    if (content.length === 0) {
      this.modalBox.show('Invalid content value', 'Content length must be greater than zero.');
      return;
    }

    if (!this.deadlineCheckbox.checked) {
      this.todosDOM.add(new Todo(title, content));
      this.resetForm();
      return;
    }

    const day = this.form.day.value;

    if (day <= 0) {
      this.modalBox.show('Invalid day value', 'Value of day must be greater than 0.');
      return;
    }

    const month = this.form.month.value;

    if (month <= 0) {
      this.modalBox.show('Invalid month value', 'Value of month must be greater than 0.');
      return;
    }

    const year = this.form.year.value;

    if (year <= 0) {
      this.modalBox.show('Invalid year value', 'Value of year must be greater than 0.');
      return;
    }

    const deadline = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY');

    if (!deadline.isValid()) {
      this.modalBox.show('Invalid date format', 'Something is wrong with the format of the date you passed.');
      return;
    }

    if (!deadline.isAfter()) {
      this.modalBox.show('Invalid date value', 'Your deadline should be set to tomorrow or later.');
      return;
    }

    this.todosDOM.add(new Todo(title, content, deadline));
    this.resetForm();
  }

  resetForm() {
    this.form.title.value = '';
    this.form.content.value = '';
    this.deadlineCheckbox.checked = false;
  }
}
