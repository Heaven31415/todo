import moment from "moment";

export default class TodoItem {
  constructor(title, content, deadline) {
    this.id = moment().valueOf();
    this.title = title;
    this.content = content;
    this.deadline = deadline;
  }
}
