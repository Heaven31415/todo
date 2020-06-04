export default class TodosDOM {
  constructor(todosStorage) {
    this.dom = document.getElementById('todos-dom');
    this.placeholder = document.getElementById('placeholder');
    this.storage = todosStorage;

    this.storage.items.forEach((todo) => this.add(todo, false));
  }

  add(todo, saveInStorage = true) {
    const todoDOM = todo.generateDOM();

    const removeButton = todoDOM.querySelector('button');
    removeButton.addEventListener('click', () => {
      todoDOM.remove();
      this.remove(todo.id);
    });

    this.dom.appendChild(todoDOM);
    if (saveInStorage) this.storage.add(todo);

    this.setPlaceholderDisplay();
  }

  remove(id) {
    this.storage.remove(id);

    this.setPlaceholderDisplay();
  }

  setPlaceholderDisplay() {
    this.placeholder.style.display = this.dom.childElementCount === 0 ? 'block' : 'none';
  }
}
