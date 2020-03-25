<template>
  <div id="app">
    <text-area></text-area>
    <words-per-minute></words-per-minute>
  </div>
</template>

<script>
	import TextArea from './components/TextArea.vue';
  import WordsPerMinute from './components/WordsPerMinute.vue';

  export default {
    name: 'quicktype',
    components: {
      TextArea,
      WordsPerMinute,
    }
  };
</script>

<style scoped>
#app {
  background-color: #141414;
  width: inherit;
  height: inherit;
}
</style>
