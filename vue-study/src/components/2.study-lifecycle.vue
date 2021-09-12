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
  created: function() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    // 定时更改time变量，影响视图
    this._timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      console.log('更新time变量', this.time);
    }, 1000);
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    // 清除定时器
    clearInterval(this._timer);
  }
  // https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90
};
</script>
