<template>
  <div id="app">
    <text-area @type="onType($event)" @start="onStartPractice()" @end="onEndPractice()"></text-area>
    <words-per-minute :typed="typedCharacters" :enableTimer="isPracticing"></words-per-minute>
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
    },
    data: function () {
      return {
        typedCharacters: 0,
        isPracticing: false,
      };
    },
    methods: {
      onType: function (typed) {
        this.typedCharacters = typed;
      },
      onStartPractice: function () {
        this.isPracticing = true;
      },
      onEndPractice: function () {
        this.isPracticing = false;
      }
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
