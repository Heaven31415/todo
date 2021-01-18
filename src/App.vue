<template>
  <modal-box></modal-box>
  <date-time></date-time>
  <router-view></router-view>
  <footer>{{ currentYear }} © All Rights Reserved. May we meet again!</footer>
</template>

<script>
import moment from "moment";

import DateTime from "./components/DateTime.vue";
import ModalBox from "./components/ModalBox.vue";

export default {
  name: "App",
  components: {
    DateTime,
    ModalBox,
  },
  computed: {
    currentYear() {
      return moment().format("YYYY");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;1,700&display=swap");

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

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #333;
  font-family: "Mulish", sans-serif;
  text-align: center;
}

body {
  background-image: url("assets/background.png"); /* Background pattern from Toptal Subtle Patterns */
  margin: 0;
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

@keyframes fade-in {
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
}

.fade-in {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.fade-out {
  animation-name: fade-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
</style>
