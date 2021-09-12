<template>
  <div class="child" style="border: 1px solid gray;">
    <h3>{{ text }}: {{ title }}</h3>
    <slot>默认slot</slot>
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
