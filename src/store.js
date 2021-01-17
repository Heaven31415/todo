import Todos from "./repositories/Todos.js";

export default {
  state() {
    return {
      modalBox: {
        isVisible: false,
        header: "",
        body: "",
      },
      todos: new Todos(),
    };
  },
  mutations: {
    showModalBox(state, payload) {
      state.modalBox.isVisible = true;
      state.modalBox.header = payload.header;
      state.modalBox.body = payload.body;
    },
    hideModalBox(state) {
      state.modalBox.isVisible = false;
    },
    addTodo(state, payload) {
      state.todos.add(payload.todo);
    },
    removeTodo(state, payload) {
      state.todos.remove(payload.id);
    },
  },
  getters: {
    modalBox(state) {
      return state.modalBox;
    },
    todos(state) {
      return state.todos.todos;
    },
  },
};
