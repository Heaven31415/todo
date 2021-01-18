<template>
  <header>
    <h2>All your things to do are belong to us!</h2>
  </header>
  <main>
    <new-todo-form></new-todo-form>
    <todos></todos>
  </main>
</template>

<script>
import NewTodoForm from "../NewTodoForm.vue";
import Todos from "../Todos.vue";

export default {
  components: {
    NewTodoForm,
    Todos,
  },
};
</script>