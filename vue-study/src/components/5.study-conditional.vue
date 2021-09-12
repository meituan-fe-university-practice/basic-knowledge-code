<template>
  <div class="container">
    <span class="success" v-if="status === 'success'">成功</span>
    <span class="fail" v-else-if="status === 'fail'">失败</span>
    <span class="init" v-else>进行中</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'success', // init success fail
    }
  }
};
</script>
