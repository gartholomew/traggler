<template>
  <AlbumInput @albumSelected="readTagsFromAlbum"/>
  <TagDisplay
      v-for="tag in displayTags"
      v-bind:tagName="tag.display"
      v-bind:tagValue="tag.value"
      v-bind:key="tag.id"
  />
  <ApplyButton v-bind:files="tracks.map(t => t.file)" v-bind:tags="displayTags"/>
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
      displayTags: {
        artist: {display: "Artist Name", value: undefined},
        album: {display: "Album Title", value: undefined},
        performerInfo: {display: "Album Artist", value: undefined},
        year: {display: "Date", value: undefined},
        partOfSet: {display: "Total Discs", value: undefined},
        genre: {display: "Genre", value: undefined}
      },
      tracks: []
    }
  },
  methods: {
    readTagsFromAlbum(files) {
      const Track = require('./track');
      this.tracks = [];

      files.forEach(file => {
        const fileTags = NodeID3.read(file.path, {noRaw: true});
        this.tracks.push(new Track(file, fileTags));
      });

      for (let tag in this.displayTags) {
        const tagValues = this.tracks.map(track => track.tags[tag]);
        this.displayTags[tag].value = tagValues.reduce((a, b) => a === b ? a : "<< multiple >>");
      }
    }
  }
}
</script>

<style>

</style>