<template>
  <h2>What do you need to do?</h2>
  <p v-if="$store.getters.todoItems.length === 0">
    You don't have to do anything!
  </p>
  <div v-else>
    <todo-item
      v-for="todoItem in $store.getters.todoItems"
      :key="todoItem.id"
      :id="todoItem.id"
      :title="todoItem.title"
      :content="todoItem.content"
      :deadline="todoItem.deadline"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
};
</script>