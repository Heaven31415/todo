const addNewTodoForm = document.querySelector('#add-new-todo')
const placeholder = document.querySelector('#placeholder')
const todos = document.querySelector('#todos')
let todosData = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

// Build every todo div after loading todos

const setPlaceholderStatus = () => {
  placeholder.style.display = todos.childElementCount === 0 ? 'block' : 'none'
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

  const editButton = document.createElement('button')
  editButton.textContent = 'Edit'
  editButton.classList.add('edit-button')
  editButton.onclick = () => {
    // TODO: Work on me!
  }
  div.appendChild(editButton)

  const removeButton = document.createElement('button')
  removeButton.textContent = 'Delete'
  removeButton.classList.add('delete-button')
  removeButton.onclick = () => {
    div.remove()
    setPlaceholderStatus()

    todosData = todosData.filter(todo => todo.title !== title && todo.body !== body)
    localStorage.setItem('todos', JSON.stringify(todosData))
  }
  div.appendChild(removeButton)

  return div
}

addNewTodoForm.onsubmit = function(e) {
  e.preventDefault()

  const title = e.target.elements[0].value
  const body = e.target.elements[1].value

  if (title.length !== 0 && body.length !== 0) {
    e.target.elements[0].value = ''
    e.target.elements[1].value = ''
  
    const todo = createTodoDOM(title, body)
    todos.appendChild(todo)
    setPlaceholderStatus()

    todosData.push({
      title: title,
      body: body
    })
    localStorage.setItem('todos', JSON.stringify(todosData))
  }
}