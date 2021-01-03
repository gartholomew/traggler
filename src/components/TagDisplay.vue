<template>
  <div class="hello">
    <label for="tag">{{ tagName }}:</label>
    <input id="tag" v-model="tagValue" @input="tagValueUpdated"/>
  </div>
</template>

<script>
export default {
  emits: ["tagValueUpdated"],
  props: {
    tagId: String,
    tagName: String,
    initValue: String
  },
  computed: {
    tagValue: {
      get: function () {
        return this.initValue;
      },
      set: function () {
      }
    }
  },
  methods: {
    tagValueUpdated(event) {
      this.$emit("tagValueUpdated", this.tagId, event.target.value);
    }
  }
}
</script>

<style scoped>

</style>
