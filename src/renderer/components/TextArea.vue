<template>
	<div id="text-area" @keydown="onClick($event)">
		<span v-for="(character, index) in text" :class="{ 
			ready: currentChar === index, 
			correct: result[index] === 'correct',
			incorrect: result[index] === 'incorrect',
			incorrectSpace: result[index] === 'incorrect' && character === ' '
		}">{{ character }}</span>
	</div>
</template>

<script>
	export default {
		created: function () {
			window.addEventListener('keypress', this.keypress);
			window.addEventListener('keydown', this.keydown);
		},
		destroyed: function () {
			window.removeEventListener('keypress', this.keypress);
			window.removeEventListener('keydown', this.keydown);
		},
		props: ['text'],
		data: function () {
			return {
				currentChar: 0,
				result: [],
			};
		},
		methods: {
			keypress: function (e) {
				if (this.currentChar === this.text.length) { return; }
				
				const character = String.fromCharCode(e.charCode);
				if (character === this.text[this.currentChar]) {
					this.result.push('correct');
				} else { this.result.push('incorrect'); }

				if (this.currentChar === 0) {
					this.$emit('start');
				} else if (this.currentChar === this.text.length - 1) {
					this.$emit('end', { abort: false, correctSymbols: this.result.filter(r => r === 'correct').length });
				}

				++this.currentChar;

				this.$emit('type', this.currentChar);
			},
			keydown: function (e) {
				if (e.key === 'Escape') {
					this.$emit('end', { abort: true, force: true });
				}
			}
		},
	};
</script>

<style scoped>
#text-area {
	position: absolute;
	left: 50%;
	top: 10%;
	transform: translateX(-50%);

	width: 69%;
	height: 62%;

	font-family: consolas;
	font-weight: bold;
	font-size: 1.5vw;
	line-height: 1.5;
	color: #a4a4a4;

	text-align: justify;
	text-align-last: left;

	user-select: none;
	cursor: default;
}

.correct {
	color: #7dd92b;
}

.incorrect {
	color: #d94c2b;
}

.incorrectSpace {
	border-bottom: 2px solid #d94c2b;
}

.ready {
	color: #d9be2b;
}
</style>