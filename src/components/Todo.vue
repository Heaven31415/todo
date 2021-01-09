<template>
  <div class="todo">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <button @click="$store.commit('removeTodo', { id })">Delete</button>
    <div class="deadline" v-if="deadline">{{ deadlineText }}</div>
  </div>
</template>

<script>
import moment from "moment";

const getNumberOfDays = (a, b) =>
  Math.max(Math.ceil(moment.duration(a.diff(b)).asDays()), 0);

export default {
  props: {
    id: Number,
    title: String,
    content: String,
    deadline: {
      required: false,
      default: null,
    },
  },
  computed: {
    deadlineText() {
      const numberOfDays = getNumberOfDays(this.deadline, moment());

      const deadlineText = this.deadline.format("D MMMM YYYY");
      const numberOfDaysText = `${numberOfDays} day${
        numberOfDays !== 1 ? "s" : ""
      } left`;

      return `${deadlineText} (${numberOfDaysText})`;
    },
  },
};
</script>

<style scoped>
.todo {
  flex: 0 1 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 5px;
  background-color: white;
  border: 1px solid #333;
  box-shadow: 2px 2px 4px 2px rgba(30, 30, 30, 0.5);
  overflow: auto;
}

h3 {
  margin: 10px 0 5px;
}

p {
  font-size: 1.2em;
  margin: 5px;
  padding: 5px;
  width: 90%;
  text-align: left;
}

button {
  font: 1.2em "Mulish", sans-serif;
  width: 150px;
  margin: 5px 0 10px;
  padding: 5px;
  background-color: rgb(205, 45, 45);
  color: #eee;
  border: 1px solid #333;
  border-radius: 4px;
  transition: background-color 0.5s ease-in;
}

button:hover {
  cursor: pointer;
  background-color: rgb(160, 35, 35);
  box-shadow: 1px 1px 4px 2px rgba(30, 30, 30, 0.5);
}

button:focus {
  box-shadow: 1px 1px 4px 2px rgba(30, 30, 30, 0.5);
  outline: none;
}

.deadline {
  width: 100%;
  height: 2em;
  line-height: 2em;
  background-color: #333;
  color: #eee;
}
</style>