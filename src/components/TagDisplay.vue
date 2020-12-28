<template>
  <div class="hello">
    <label for="tag">{{ tagName }}:</label>
    <input id="tag" v-model="tagValue"/>
  </div>
</template>

<script>
export default {
  props: {
    tagName: String,
    tagValue: String
  }
}
</script>

<style scoped>

</style>
