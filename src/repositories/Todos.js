import moment from "moment";
import Todo from "../models/Todo.js";

export default class Todos {
  constructor() {
    this.todos = this.load();
  }

  load() {
    const json = localStorage.getItem("todos");

    if (!json) {
      return [];
    }

    return JSON.parse(json).map((t) => {
      const todo = new Todo(
        t.title,
        t.content,
        t.deadline ? moment(t.deadline) : undefined
      );
      todo.id = t.id;
      return todo;
    });
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  add(todo) {
    this.todos.push(todo);
    this.save();
  }

  remove(id) {
    const index = this.todos.findIndex((t) => t.id === id);

    if (index !== -1) {
      this.todos.splice(index, 1);
      this.save();
    }
  }
}
