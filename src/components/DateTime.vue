<template>
  <h1 class="fade-in">{{ content }}</h1>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      content: moment().format("D MMMM YYYY HH:mm:ss"),
    };
  },
  mounted() {
    setInterval(() => {
      this.content = moment().format("D MMMM YYYY HH:mm:ss");
    }, 1000);
  },
};
</script>

<style scoped>
h1 {
  width: 100%;
  box-shadow: 0 2px 4px 2px rgba(30, 30, 30, 0.5);
  background-color: #eee;
  color: #333;
  margin: 0 0 15px;
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  animation-delay: 1s;
}
</style>