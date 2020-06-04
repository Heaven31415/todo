import moment from 'moment';

const getNumberOfDays = (a, b) => Math.max(Math.ceil(moment.duration(a.diff(b)).asDays()), 0);

export default class Todo {
  constructor(title, content, deadline) {
    this.id = moment().valueOf();
    this.title = title;
    this.content = content;
    this.deadline = deadline;
  }

  static fromData(data) {
    const todo = new Todo(data.title, data.content, data.deadline);
    todo.id = data.id;
    return todo;
  }

  generateDOM() {
    const container = document.createElement('div');
    container.classList.add('todo');

    const title = document.createElement('h3');
    title.textContent = this.title;
    container.appendChild(title);

    const content = document.createElement('p');
    content.textContent = this.content;
    container.appendChild(content);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.classList.add('delete-button');
    container.appendChild(removeButton);

    if (this.deadline) {
      const deadlineSpan = document.createElement('span');

      const deadline = moment(this.deadline);
      const numberOfDays = getNumberOfDays(deadline, moment());

      deadlineSpan.textContent = `${deadline.format('D MMMM YYYY')} (${numberOfDays === 1 ? `${numberOfDays} day` : `${numberOfDays} days`})`;
      container.appendChild(deadlineSpan);
    }

    return container;
  }
}
