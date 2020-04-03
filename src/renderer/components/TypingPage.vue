<template>
	<div id="typing-page">
		<text-area :text="text" @type="onType($event)" @start="onStartPractice()" @end="onEndPractice($event)"></text-area>
    	<words-per-minute :typed="typedCharacters" :enableTimer="isPracticing" @stats-ready="backToMenu($event)"></words-per-minute>  
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
				correctSymbolCount: 0,
				showStatus: true,
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
			onEndPractice: function (data) {
				this.isPracticing = false;
				this.correctSymbolCount = data.correctSymbols;
				this.showStatus = !data.abort;
			},
			backToMenu: function (stats) {
				const data = {
					showStatus: this.showStatus,
					data: {
						accuracy: Math.round((this.correctSymbolCount / this.text.length) * 100),
						avgWpm: stats.avg,
						minWpm: stats.min,
						maxWpm: stats.max,
					},
				};

				this.$emit('back-to-menu', data);
			},
		}
	};
</script>
