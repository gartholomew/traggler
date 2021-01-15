<template>
  <AlbumInput @albumSelected="readTagsFromAlbum"/>
  <TagDisplay
      v-for="tag in displayTags"
      v-bind:key="tag.id"
      v-bind:tagId="tag.id"
      v-bind:tagName="tag.display"
      v-bind:initValue="tag.value"
      @tagValueUpdated="updateTrackTagValue"/>
  <ApplyButton v-bind:tracks="tracks"/>
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
      displayTags: [
        {id: "artist", display: "Artist Name"},
        {id: "album", display: "Album Title"},
        {id: "performerInfo", display: "Album Artist"},
        {id: "year", display: "Date"},
        {id: "partOfSet", display: "Disc"},
        {id: "genre", display: "Genre"}
      ],
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
      for (let tag of this.displayTags) {
        tag.value = this.tracks
            .map(track => track.tags[tag.id])
            .reduce((a, b) => a === b ? a : "<< multiple >>");
      }
    },
    updateTrackTagValue(tagId, newValue) {
      this.tracks.forEach(t => t.tags[tagId] = newValue);
    }
  }
}
</script>

<style>

</style>