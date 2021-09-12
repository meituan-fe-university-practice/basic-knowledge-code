<template>
  <div class="child">
    <h3>{{ text }}: {{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data: function() {
    return {
      text: 'child'
    }
  }
};
</script>
