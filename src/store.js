export default {
  state() {
    return {
      modalBox: {
        isVisible: false,
        header: "",
        body: "",
      },
      todos: [],
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
      state.todos.push(payload.todo);
    },
    removeTodo(state, payload) {
      const index = state.todos.findIndex((t) => t.id === payload.id);

      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
  getters: {
    modalBox(state) {
      return state.modalBox;
    },
    todos(state) {
      return state.todos;
    },
  },
};
