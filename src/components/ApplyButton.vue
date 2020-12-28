<template>
  <input type="button" value="Apply" @click="copyAlbumToWorkingDirectory"/>
</template>

<script>
export default {
  props: {
    files: FileList
  },
  methods: {
    copyAlbumToWorkingDirectory() {
      const fs = require('fs');
      const path = require('path');

      const baseDir = path.dirname(this.files[0].path);
      const workDir = baseDir + "/traggler";
      fs.mkdirSync(workDir);
      this.files.forEach(file => fs.copyFileSync(file.path, `${workDir}/${file.name}`));
    }
  }
}
</script>

<style scoped>

</style>
