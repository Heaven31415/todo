<template>
  <form autocomplete="off" @submit.prevent="onSubmit">
    <h3>Add a new thing to do</h3>
    <input
      type="text"
      placeholder="Short description of your todo."
      v-model="title"
    />
    <textarea
      placeholder="Describe every little detail of your future task."
      v-model="content"
    ></textarea>
    <label for="deadline">Deadline</label>
    <input name="deadline" type="checkbox" v-model="withDeadline" />
    <div>
      <input
        type="number"
        placeholder="Day"
        :disabled="!withDeadline"
        v-model="day"
      />
      <input
        type="number"
        placeholder="Month"
        :disabled="!withDeadline"
        v-model="month"
      />
      <input
        type="number"
        placeholder="Year"
        :disabled="!withDeadline"
        v-model="year"
      />
    </div>
    <button>Add</button>
  </form>
</template>

<script>
import moment from "moment";

import Todo from "../models/Todo.js";

export default {
  data() {
    return {
      title: "",
      content: "",
      withDeadline: false,
      day: null,
      month: null,
      year: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.title.length === 0) {
        this.$store.commit("showModalBox", {
          header: "Invalid title value",
          body: "Title length must be greater than zero.",
        });
        return;
      }

      if (this.content.length === 0) {
        this.$store.commit("showModalBox", {
          header: "Invalid content value",
          body: "Content length must be greater than zero.",
        });
        return;
      }

      if (!this.withDeadline) {
        this.$store.commit("addTodo", {
          todo: new Todo(this.title, this.content),
        });
        this.resetForm();
        return;
      }

      if (this.day <= 0) {
        this.$store.commit("showModalBox", {
          header: "Invalid day value",
          body: "Value of day must be greater than 0.",
        });
        return;
      }

      if (this.month <= 0) {
        this.$store.commit("showModalBox", {
          header: "Invalid month value",
          body: "Value of month must be greater than 0.",
        });
        return;
      }

      if (this.year <= 0) {
        this.$store.commit("showModalBox", {
          header: "Invalid year value",
          body: "Value of year must be greater than 0.",
        });
        return;
      }

      const deadline = moment(
        `${this.day}/${this.month}/${this.year}`,
        "DD/MM/YYYY"
      );

      if (!deadline.isValid()) {
        this.$store.commit("showModalBox", {
          header: "Invalid date format",
          body: "Something is wrong with the format of the date you passed.",
        });
        return;
      }

      if (!deadline.isAfter()) {
        this.$store.commit("showModalBox", {
          header: "Invalid date value",
          body: "Your deadline should be set to tomorrow or later.",
        });
        return;
      }

      this.$store.commit("addTodo", {
        todo: new Todo(this.title, this.content, deadline),
      });
      this.resetForm();
    },
    resetForm() {
      this.title = "";
      this.content = "";
      this.withDeadline = false;
      this.day = null;
      this.month = null;
      this.year = null;
    },
  },
};
</script>

<style scoped>
form {
  max-width: 700px;
  margin: 1.5em 0 3em;
  box-shadow: 2px 2px 4px 2px rgba(30, 30, 30, 0.5);
  background-color: #eee;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0 2em 1em;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  color: #333;
  font: 1em "Muli", sans-serif;
  transition: background-color 0.5s ease-in;
}

input:focus {
  outline: none;
  background-color: #333;
  color: #eee;
}

textarea {
  width: 100%;
  height: 200px;
  padding: 8px;
  margin-bottom: 10px;
  resize: none;
  font: 1em "Muli", sans-serif;
  border: 1px solid #333;
  border-radius: 4px;
  color: #333;
  transition: background-color 0.5s ease-in;
}

textarea:focus {
  outline: none;
  background-color: #333;
  color: #eee;
}

button {
  width: 200px;
  padding: 8px 0;
  font: 1.2em "Muli";
  color: #eee;
  background-color: rgb(64, 190, 64);
  border: 1px solid #333;
  border-radius: 4px;
  transition: background-color 0.5s ease-in;
}

button:hover {
  background-color: rgb(52, 156, 52);
  cursor: pointer;
}

button:focus {
  border: 1px dotted #333;
  outline: none;
}
</style>