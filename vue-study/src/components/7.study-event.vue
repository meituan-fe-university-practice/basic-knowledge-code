<template>
  <div class="container">
    <p>Message：{{ msg }}</p>
    <button @click="changeMessage">按钮</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'Hello Vue.',
    }
  },
  methods: {
    changeMessage(e) {
      this.msg = 'Hi ' + e.target.innerHTML;
    }
  }
};
</script>
