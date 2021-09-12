<template>
  <div class="container">
    <p>{{ message.trim().endsWith('.') ? message.trim() : message.trim() + '.' }}</p>
    <p>{{ messageTrimDot }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: '   ABC '
    }
  },
  computed: {
    // 计算属性：减少模板内的复杂逻辑，增强模板代码的可读性
    messageTrimDot: function() {
      return this.message.trim().endsWith('.') ? this.message.trim() : this.message.trim() + '.';
    },
  }
};
</script>
