<template>
  <div class="container">
    <span class="info">Message：{{ msg }}</span>
    <p><span>时间：</span>{{ time }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'Hello Vue.',
      time: new Date().toLocaleTimeString()
    }
  },
  watch: {
    time(newVal) {
      newVal
      // window.sendTimeToServer(newVal); // 发送时间给服务器
    }
  },
  mounted() {
    console.log('mounted');
    // 定时更改time变量，影响视图
    this._timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
};
</script>
