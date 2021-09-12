<template>
  <div class="container">
    <div>{{ text }}</div>
    <child-slot title="Vue Slot">
      <template>
        <div>父组件的模板</div>
        <img 
          src="https://www.bjtu.edu.cn/images/img2019/logo_01.png"
          alt="BJTU Logo"
          style="background: #005bac;"/>
      </template>
    </child-slot>
  </div>
</template>

<script>
import ChildSlot from './11.study-slot-child.vue';

export default {
  components: {
    ChildSlot
  },
  data: function() {
    return {
      text: 'parent'
    }
  }
};
</script>
