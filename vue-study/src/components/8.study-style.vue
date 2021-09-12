<template>
  <div class="container">
    <p :class="status">Message：{{ msg }}</p>
    <p :class="{ success: status === 'success', fail: status === 'fail' }">Message：{{ msg }}</p>
    <button @click="changeStatus('success')">成功</button>
    <button @click="changeStatus('fail')">失败</button>
    <hr>
    <p style="fontSize: 20px;">Message：{{ msg }}</p>
    <p :style="{ fontSize: textFontSize + 'px' }">Message：{{ msg }}</p>
    <button @click="textFontSize++">变大</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'Hello Vue.',
      status: '',
      textFontSize: 16
    }
  },
  methods: {
    changeStatus(status) {
      this.status = status;
    }
  }
};
</script>

<style scoped>
.success {
  color: lightgreen;
}
.fail {
  color: lightcoral;
}
</style>
