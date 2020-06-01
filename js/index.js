'use strict'

window.addEventListener('load', () => {
  const datetime = new Datetime()
  const deadlineCheckbox = new DeadlineCheckbox()

  const todosStorage = new TodosStorage()
  const todosDOM = new TodosDOM(todosStorage)
  const modalBox = new ModalBox()
  const newTodoForm = new NewTodoForm(todosDOM, todosStorage, modalBox)
})