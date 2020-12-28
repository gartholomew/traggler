<template>
  <div class="hello">
    <label for="album">Album folder:</label>
    <input id="album" type="file" @input="albumSelected" webkitdirectory/>
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
