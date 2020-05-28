const todoForm = document.getElementById('todo-form')
const placeholder = document.getElementById('placeholder')
const todosContainer = document.getElementById('todos-container')
let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

const setPlaceholderStatus = () => {
  placeholder.style.display = todosContainer.childElementCount === 0 ? 'block' : 'none'
 }

const createTodoDOM = (title, body) => {
  const div = document.createElement('div')
  div.classList.add('todo')

  const h3 = document.createElement('h3')
  h3.textContent = title
  div.appendChild(h3)

  const p = document.createElement('p')
  p.textContent = body
  div.appendChild(p)

  const removeButton = document.createElement('button')
  removeButton.textContent = 'Delete'
  removeButton.classList.add('delete-button')
  removeButton.onclick = () => {
    div.remove()
    setPlaceholderStatus()

    todos = todos.filter(todo => todo.title !== title && todo.body !== body)
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  div.appendChild(removeButton)

  return div
}

todoForm.onsubmit = function(e) {
  e.preventDefault()

  const title = e.target.elements[0].value
  const body = e.target.elements[1].value

  if (title.length !== 0 && body.length !== 0) {
    e.target.elements[0].value = ''
    e.target.elements[1].value = ''
  
    const todo = createTodoDOM(title, body)
    todosContainer.appendChild(todo)
    setPlaceholderStatus()

    todos.push({
      title: title,
      body: body
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}