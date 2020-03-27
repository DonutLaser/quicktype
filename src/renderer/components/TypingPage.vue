<template>
	<div id="typing-page">
		<text-area @type="onType($event)" @start="onStartPractice()" @end="onEndPractice()"></text-area>
    	<words-per-minute :typed="typedCharacters" :enableTimer="isPracticing"></words-per-minute>  
	</div>
</template>

<script>
	import TextArea from './TextArea.vue';
	import WordsPerMinute from './WordsPerMinute.vue';

	export default {
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
