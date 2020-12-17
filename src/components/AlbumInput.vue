<template>
  <div class="hello">
    <label>Album folder:</label>
    <input @input="albumSelected" type="file" webkitdirectory/>
  </div>
</template>

<script>
export default {
  emits: ["albumSelected"],
  methods: {
    albumSelected(event) {
      this.$emit("albumSelected", event.target.files);
    }
  }
}
</script>

<style scoped>

</style>
