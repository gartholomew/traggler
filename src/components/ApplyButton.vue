<template>
  <input type="button" value="Apply" @click="copyAlbumToWorkingDirectory"/>
</template>

<script>
const Fs = require('fs');
const Path = require('path');

export default {
  props: {
    files: Array,
    tags: Object
  },
  methods: {
    copyAlbumToWorkingDirectory() {
      const baseDir = Path.dirname(this.files[0].path);
      const workDir = baseDir + "/traggler";
      Fs.mkdirSync(workDir);
      this.files.forEach(file => {
        Fs.copyFileSync(file.path, `${workDir}/${file.name}`);
      });
    }
  }
}
</script>

<style scoped>

</style>
