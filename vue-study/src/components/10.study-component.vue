<template>
  <div class="container">
    <div>{{ text }}</div>
    <child-component title="Vue Child" />
  </div>
</template>

<script>
import ChildComponent from './10.study-component-child.vue';

export default {
  components: {
    ChildComponent
  },
  data: function() {
    return {
      text: 'parent'
    }
  }
};
</script>
