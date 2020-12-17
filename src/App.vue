<template>
  <AlbumInput @albumSelected="onAlbumSelected"/>
  <TagDisplay v-for="tag in tags" v-bind:tag-name="tag.display" v-bind:key="tag.id"/>
</template>

<script>
import AlbumInput from "./components/AlbumInput.vue"
import TagDisplay from "./components/TagDisplay.vue"

export default {
  name: "App",
  components: {
    AlbumInput, TagDisplay
  },
  data() {
    return {
      tags: [
        {id: "artist", display: "Artist Name"},
        {id: "album", display: "Album Title"},
        {id: "album-artist", display: "Album Artist"},
        {id: "date", display: "Date"},
        {id: "genre", display: "Genre"}
      ]
    }
  },
  methods: {
    onAlbumSelected(files) {
      console.log(files);
    }
  }
}
</script>

<style>

</style>