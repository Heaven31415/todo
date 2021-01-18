import TodoItems from "./repositories/TodoItems.js";

export default {
  state() {
    return {
      modalBox: {
        isVisible: false,
        header: "",
        body: "",
      },
      todoItems: new TodoItems(),
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
    addTodoItem(state, payload) {
      state.todoItems.add(payload.todoItem);
    },
    removeTodoItem(state, payload) {
      state.todoItems.remove(payload.id);
    },
  },
  getters: {
    modalBox(state) {
      return state.modalBox;
    },
    todoItems(state) {
      return state.todoItems.todoItems;
    },
  },
};
