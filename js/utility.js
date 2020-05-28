'use strict'

const setTopbarContent = () => {
  topbar.textContent = moment().format('D MMMM YYYY hh:mm:ss')
}

const setPlaceholderContent = () => {
  placeholder.style.display = todosContainer.childElementCount === 0 ? 'block' : 'none'
}

const getNewId = () => {
  return todos.get().length === 0 ? 1 : todos.get().map(t => t.id).reduce((a, b) => Math.max(a, b)) + 1
}

const createTodoDOM = (todo) => {
  const div = document.createElement('div')
  div.classList.add('todo')

  const h3 = document.createElement('h3')
  h3.textContent = `${todo.id}. ${todo.title}`
  div.appendChild(h3)

  const p = document.createElement('p')
  p.textContent = todo.content
  div.appendChild(p)

  const removeButton = document.createElement('button')
  removeButton.textContent = 'Delete'
  removeButton.classList.add('delete-button')
  removeButton.onclick = () => {
    todos.remove(todo.id)
    div.remove()
    setPlaceholderContent()
  }
  div.appendChild(removeButton)

  return div
}