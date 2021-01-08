import moment from 'moment';

export default class Todo {
  constructor(title, content, deadline) {
    this.id = moment().valueOf();
    this.title = title;
    this.content = content;
    this.deadline = deadline;
  }
}