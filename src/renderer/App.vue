<template>
  <div id="app">
    <text-area></text-area>
  </div>
</template>

<script>
	import TextArea from './components/TextArea.vue';

  export default {
    name: 'quicktype',
    components: {
      TextArea,
    }
  };
</script>

<style>
#app {
  background-color: #141414;
  width: inherit;
  height: inherit;
}
</style>
