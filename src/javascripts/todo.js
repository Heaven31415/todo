import moment from 'moment';

const getNumberOfDays = (a, b) => Math.max(Math.ceil(moment.duration(a.diff(b)).asDays()), 0);

export default class Todo {
  constructor(title, content, deadline) {
    this.id = moment().valueOf();
    this.title = title;
    this.content = content;
    this.deadline = deadline;
  }

  static fromJSON(data) {
    const deadline = data.deadline ? moment(data.deadline) : undefined;
    const todo = new Todo(data.title, data.content, deadline);
    todo.id = data.id;
    return todo;
  }

  createDOM() {
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

    const deadlineDiv = document.createElement('div');
    deadlineDiv.classList.add('deadline');
    container.appendChild(deadlineDiv);

    if (this.deadline) {
      deadlineDiv.textContent = this.createDeadlineDivTextContent();
    }

    return container;
  }

  createDeadlineDivTextContent() {
    const numberOfDays = getNumberOfDays(this.deadline, moment());

    const deadlineText = this.deadline.format('D MMMM YYYY');
    const numberOfDaysText = `${numberOfDays} day${numberOfDays !== 1 ? 's' : ''} left`;

    return `${deadlineText} (${numberOfDaysText})`;
  }
}
