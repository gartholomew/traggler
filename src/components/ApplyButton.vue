<template>
  <input type="button" value="Apply" @click="copyAlbumToWorkingDirectory"/>
</template>

<script>
const Fs = require('fs');
const NodeID3 = require('node-id3');
const Path = require('path');

export default {
  props: {
    tracks: Array
  },
  methods: {
    copyAlbumToWorkingDirectory() {
      const baseDir = Path.dirname(this.tracks[0].file.path); // Assume all track files are in the same directory
      const workDir = Path.join(baseDir, "traggler");
      Fs.mkdirSync(workDir);
      this.tracks.forEach(track => {
        const destFile = Path.join(workDir, track.file.name); // todo: standardize destination file name

        // 1. Copy to temp directory (todo: make destination directory a user-defined thing)
        Fs.copyFileSync(track.file.path, destFile);

        // 2. Write tags
        NodeID3.write(track.tags, destFile);

        // 3. Scan with ReplayGain
        // 4. Notify Plex API
      });
    }
  }
}
</script>

<style scoped>

</style>
