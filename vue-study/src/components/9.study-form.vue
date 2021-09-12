<template>
  <div class="container">
    <input type="text" v-model="formData.text"/>
    <span> | </span>
    <select v-model="formData.selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <hr />
    <div>
      <div>formData：</div>
      <code>{{ JSON.stringify(formData) }}</code>
    </div>
  </div>
</template>

<script>
// TODO v-model语法糖
export default {
  data: function() {
    return {
      formData: {
        text: 'Hello input.',
        selected: 'A'
      }
    }
  }
};
</script>
