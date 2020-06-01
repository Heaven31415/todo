'use strict'

const todoForm = document.getElementById('todo-form')
const todosContainer = document.getElementById('todos-container')
const todos = new TodosStorage()

const deadlineCheckbox = document.getElementById('deadline-checkbox')
const dayInput = document.getElementById('day-input')
const monthInput = document.getElementById('month-input')
const yearInput = document.getElementById('year-input')

const modalBox = new ModalBox()

deadlineCheckbox.addEventListener('change', e => {
  const disabled = !e.target.checked

  dayInput.disabled = disabled
  monthInput.disabled = disabled
  yearInput.disabled = disabled
})

window.addEventListener('load', () => {
  todos.get().forEach(todo => {
    todosContainer.appendChild(createTodoDOM(todo))
    setPlaceholderContent()
  })

  setInterval(setDatetimeContent, 1000)
})

todoForm.addEventListener('submit', e => {
  e.preventDefault()

  const title = todoForm.title.value
  const content = todoForm.content.value
  const withDeadline = todoForm.withDeadline.checked

  const day = todoForm.day.value
  const month = todoForm.month.value
  const year = todoForm.year.value

  if (title.length === 0) {
    modalBox.show('Invalid title value', 'Title length must be greater than zero.')
    return
  }

  if (content.length === 0) {
    modalBox.show('Invalid content value', 'Content length must be greater than zero.')
    return
  }

  const todo = {
    id: getNewId(),
    title: title,
    content: content
  }

  if (withDeadline) {
    const deadline = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY')

    if (!deadline.isValid()) {
      modalBox.show('Invalid date format', 'Something is wrong with the format of the date you passed.')
      return
    }

    if (!deadline.isAfter()) {
      modalBox.show('Invalid date value', 'Your deadline should be set to tomorrow or later.')
      return
    }
      
    todo.deadline = deadline
  }

  todosContainer.appendChild(createTodoDOM(todo))
  todos.push(todo)
  setPlaceholderContent()

  todoForm.title.value = ''
  todoForm.content.value = ''
  todoForm.withDeadline.checked = false

  todoForm.day.value = ''
  todoForm.month.value = ''
  todoForm.year.value = ''
})