import Todo from './todo';

export default class TodosStorage {
  constructor() {
    this.load();
  }

  load() {
    const todos = localStorage.getItem('todos');
    this.todos = todos ? JSON.parse(todos).map((t) => Todo.fromJSON(t)) : [];
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  add(todo) {
    this.todos.push(todo);
    this.save();
  }

  remove(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
    this.save();
  }

  get items() {
    return this.todos;
  }
}
