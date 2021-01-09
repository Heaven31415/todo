<template>
  <h2>What do you need to do?</h2>
  <p v-if="$store.getters.todos.length === 0">You don't have to do anything!</p>
  <div v-else>
    <todo
      v-for="todo in $store.getters.todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :content="todo.content"
      :deadline="todo.deadline"
    ></todo>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  components: { Todo },
};
</script>

<style scoped>
</style>