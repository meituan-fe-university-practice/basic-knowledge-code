<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span>{{ item }}</span>
        <span> | </span>
        <span>{{ index }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Vue.js']
    }
  }
};
</script>
