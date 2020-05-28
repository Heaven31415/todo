'use strict'

class TodosStorage {
  constructor() {
    const todos = localStorage.getItem('todos')
    this.todos = todos ? JSON.parse(todos) : []
  }

  push(todo) {
    this.todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  remove(id) {
    this.todos = this.todos.filter(t => t.id !== id)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  clear() {
    localStorage.removeItem('todos')
    this.todos = []
  }

  get() {
    return this.todos
  }
}