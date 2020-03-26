<template>
	<div id="text-area" @keydown="onClick($event)">
		<span v-for="(character, index) in text" :class="{ ready: currentChar === index, correct: result[index] === 'correct', incorrect: result[index] === 'incorrect' }">{{ character }}</span>
	</div>
</template>

<script>
	export default {
		created: function () {
			window.addEventListener('keypress', (e) => {
				const character = String.fromCharCode(e.charCode);
				if (character === this.text[this.currentChar]) {
					this.result.push('correct');
				} else { this.result.push('incorrect'); }

				if (this.currentChar === 0) {
					this.$emit('start');
				} else if (this.currentChar === this.text.length) {
					this.$emit('end');
				}

				++this.currentChar;

				this.$emit('type', this.currentChar);
			});
		},
		data: function () {
			return {
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate maximus congue. Donec a neque sed augue semper ultricies non nec elit. Nullam et magna ac ipsum pharetra sagittis. Etiam interdum congue neque, et tristique quam dapibus at. Donec eu consectetur lacus, luctus imperdiet purus. Pellentesque eros urna, dapibus vel consectetur ac, vestibulum vitae tellus. Phasellus nec pharetra lorem. Aliquam egestas turpis pharetra tellus rutrum fermentum ac a ex. Ut mauris neque, auctor sed commodo at, hendrerit vitae quam. Vivamus metus magna, rhoncus a turpis quis, pretium mattis sem. Maecenas ac mauris eu sem vehicula porttitor.',
				currentChar: 0,
				result: [],
			};
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

.ready {
	color: #d9be2b;
}
</style>