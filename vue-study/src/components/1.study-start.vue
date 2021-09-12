<template>
  <div class="container">
    <span class="info">Message：{{ msg }}</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'Hello Vue.',
    }
  }
};
</script>

<style scoped>
.info {
  color: lightsalmon;
}
</style>
