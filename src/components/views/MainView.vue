<template>
  <header>
    <h2>All your things to do are belong to us!</h2>
  </header>
  <main>
    <new-todo-item-form></new-todo-item-form>
    <todo-items></todo-items>
  </main>
</template>

<script>
import NewTodoItemForm from "../NewTodoItemForm.vue";
import TodoItems from "../TodoItems.vue";

export default {
  components: {
    NewTodoItemForm,
    TodoItems,
  },
};
</script>