<template>
	<div id="typing-page">
		<text-area :text="text" @type="onType($event)" @start="onStartPractice()" @end="onEndPractice($event)"></text-area>
    	<words-per-minute :typed="typedCharacters" :enableTimer="isPracticing"></words-per-minute>  
    	<version></version>
	</div>
</template>

<script>
	import TextArea from './TextArea.vue';
	import WordsPerMinute from './WordsPerMinute.vue';
	import Version from './Version.vue';

	export default {
		components: {
			TextArea,
			WordsPerMinute,
			Version,
		},
		props: ['text'],
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
			onEndPractice: function (abort) {
				this.isPracticing = false;

				if (abort) { this.$emit('back-to-menu'); }
			}
		}
	};
</script>
