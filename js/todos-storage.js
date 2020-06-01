'use strict'

class TodosStorage {
  constructor() {
    this.load()
  }

  load() {
    const todos = localStorage.getItem('todos')
    this.todos = todos ? JSON.parse(todos).map(t => new Todo(t.id, t.title, t.content, t.deadline)) : []
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  add(todo) {
    this.todos.push(todo)
    this.save()
  }

  remove(id) {
    this.todos = this.todos.filter(t => t.id !== id)
    this.save()
  }

  clear() {
    localStorage.removeItem('todos')
    this.todos = []
  }

  get items() {
    return this.todos
  }
}