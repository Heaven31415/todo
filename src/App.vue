<template>
  <modal-box></modal-box>
  <date-time></date-time>
  <header>
    <h2>All your things to do are belong to us!</h2>
  </header>
  <main>
    <new-todo-form></new-todo-form>
    <todos></todos>
  </main>
  <footer>2021 © All Rights Reserved. May we meet again!</footer>
</template>

<script>
import DateTime from './components/DateTime.vue';
import ModalBox from './components/ModalBox.vue';
import NewTodoForm from './components/NewTodoForm.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    DateTime,
    NewTodoForm,
    Todos,
    ModalBox
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

::selection {
  background-color: #333;
  color: #eee;
}

::-webkit-input-placeholder {
  color: #999;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  color: #333;
  background-image: url('assets/background.png'); /* Background pattern from Toptal Subtle Patterns */
  font-family: 'Muli', sans-serif;
  text-align: center;
}

main {
  flex: 1 0 auto; /* Grow to always place footer at the bottom of the screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

h1 {
  font-size: 3em;
  margin: 10px;
  padding: 10px;
  letter-spacing: 1px;
}

h2 {
  font-size: 2.4em;
  margin: 10px;
  padding: 10px;
}

h3 {
  font-size: 1.8em;
  margin: 10px;
  padding: 10px;
}

p {
  font-size: 1.3em;
}

footer {
  width: 100%;
  border-top: 1px solid #333;
  background-color: #eee;
  color: #333;
  flex-shrink: 0;
  font-size: 1.3em;
  padding: 20px;
  margin-top: 20px;
}

#app {
  width: 100%;
}
</style>
