<template>
  <h1>{{ content }}</h1>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      content: moment().format('D MMMM YYYY HH:mm:ss')
    }
  },
  mounted() {
    setInterval(() => {
      this.content = moment().format('D MMMM YYYY HH:mm:ss');
    }, 1000);
  }
};
</script>

<style scoped>

</style>