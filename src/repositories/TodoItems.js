import moment from "moment";
import TodoItem from "../models/TodoItem.js";

const LOCAL_STORAGE_TODO_ITEMS_KEY = "todo-items";

export default class TodoItems {
  constructor() {
    this.todoItems = this.load();
  }

  load() {
    const json = localStorage.getItem(LOCAL_STORAGE_TODO_ITEMS_KEY);

    if (!json) {
      return [];
    }

    return JSON.parse(json).map((t) => {
      const todoItem = new TodoItem(
        t.title,
        t.content,
        t.deadline ? moment(t.deadline) : undefined
      );
      todoItem.id = t.id;
      return todoItem;
    });
  }

  save() {
    localStorage.setItem(
      LOCAL_STORAGE_TODO_ITEMS_KEY,
      JSON.stringify(this.todoItems)
    );
  }

  add(todoItem) {
    this.todoItems.push(todoItem);
    this.save();
  }

  remove(id) {
    const index = this.todoItems.findIndex((t) => t.id === id);

    if (index !== -1) {
      this.todoItems.splice(index, 1);
      this.save();
    }
  }
}
