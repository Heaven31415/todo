'use strict'

class Todo {
  constructor(id, title, content, deadline) {
    this.id = id
    this.title = title
    this.content = content
    this.deadline = deadline
  }

  generateDOM() {
    const div = document.createElement('div')
    div.classList.add('todo')

    const h3 = document.createElement('h3')
    h3.textContent = this.title
    div.appendChild(h3)

    const p = document.createElement('p')
    p.textContent = this.content
    div.appendChild(p)

    const removeButton = document.createElement('button')
    removeButton.textContent = 'Delete'
    removeButton.classList.add('delete-button')
    div.appendChild(removeButton)

    return div
  }
}