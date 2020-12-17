<template>
  <div class="hello">
    <p>{{ tagName }}: {{ tagValue }}</p>
  </div>
</template>

<script>
export default {
  props: {
    "tagName": String,
    "tagValue": String
  }
}
</script>

<style scoped>

</style>
