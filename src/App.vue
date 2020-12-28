<template>
  <AlbumInput @albumSelected="readTagsFromAlbum"/>
  <TagDisplay
      v-for="tag in tags"
      v-bind:tagName="tag.display"
      v-bind:tagValue="tag.value"
      v-bind:key="tag.id"
  />
  <ApplyButton v-bind:files="files"/>
</template>

<script>
import AlbumInput from "./components/AlbumInput.vue";
import ApplyButton from "./components/ApplyButton.vue";
import TagDisplay from "./components/TagDisplay.vue";

const NodeID3 = require('node-id3');

export default {
  name: "App",
  components: {
    AlbumInput, ApplyButton, TagDisplay
  },
  data() {
    return {
      tags: {
        artist: {display: "Artist Name", value: undefined},
        album: {display: "Album Title", value: undefined},
        performerInfo: {display: "Album Artist", value: undefined},
        year: {display: "Date", value: undefined},
        partOfSet: {display: "Total Discs", value: undefined},
        genre: {display: "Genre", value: undefined}
      },
      files: undefined
    }
  },
  methods: {
    readTagsFromAlbum(files) {
      this.files = files;

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