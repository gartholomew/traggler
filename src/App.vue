<template>
  <AlbumInput @albumSelected="onAlbumSelected"/>
  <TagDisplay v-for="tag in tags" v-bind:tag-name="tag.display" v-bind:tag-value="tag.value" v-bind:key="tag.id"/>
</template>

<script>
import AlbumInput from "./components/AlbumInput.vue";
import TagDisplay from "./components/TagDisplay.vue";

const NodeID3 = require('node-id3');

export default {
  name: "App",
  components: {
    AlbumInput, TagDisplay
  },
  data() {
    return {
      tags: {
        artist: {display: "Artist Name"},
        album: {display: "Album Title"},
        performerInfo: {display: "Album Artist"},
        year: {display: "Date"},
        partOfSet: {display: "Total Discs"},
        genre: {display: "Genre"}
      }
    }
  },
  methods: {
    onAlbumSelected(files) {
      const trackTags = [];
      files.forEach(file => trackTags.push(NodeID3.read(file.path)));

      for (let tag in this.tags) {
        const tagValues = trackTags.map(track => track[tag]);
        this.tags[tag].value = tagValues.reduce((a, b) => a === b ? a : "<< multiple >>");
      }
    }
  }
}
</script>

<style>

</style>