<template>
  <div class="modal-box-background" :style="style">
    <div class="modal-box-content">
      <header>
        <h3>{{ $store.getters.modalBox.header }}</h3>
      </header>
      <p>{{ $store.getters.modalBox.body }}</p>
      <button @click="$store.commit('hideModalBox')">Ok</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    style() {
      return {
        visibility: this.$store.getters.modalBox.isVisible
          ? "visible"
          : "hidden",
      };
    },
  },
};
</script>

<style scoped>
.modal-box-background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-box-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
  padding: 10px;
  max-width: 600px;
  margin: 0 0.5em;
}

p {
  margin: 10px;
}

button {
  width: 40%;
  padding: 8px;
  margin: 10px;
  font: 1.2em "Muli", sans-serif;
  color: #333;
  border: 1px solid #333;
  border-radius: 4px;
  transition: all 0.5s ease-in;
}

button:hover {
  cursor: pointer;
  box-shadow: 1px 1px 4px 2px rgba(30, 30, 30, 0.5);
  background-color: #333;
  color: #eee;
}

button:focus {
  box-shadow: 1px 1px 4px 2px rgba(30, 30, 30, 0.5);
  outline: none;
}
</style>