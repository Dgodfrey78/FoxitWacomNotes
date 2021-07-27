<template>
  <div id="app">
    <PDFViewer/>
  </div>
</template>

<script>
import PDFViewer from './components/PDFViewer.vue'

export default {
  name: 'app',
  components: {
    PDFViewer
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  position: absolute;
}
</style>
