<template>
	<div id="paragraph" class="inner-container" :class="{ center: display === 'center', left: display === 'left' }">
		<span v-for="(character, index) in text" :class="{
			ready: currentChar === index,
			correct: result[index] === 'correct',
			incorrect: result[index] === 'incorrect',
			space: character === ' ' && currentChar === index,
			readySpace: character === ' ',
			incorrectSpace: result[index] === 'incorrect' && character === ' '
		}">{{ character }}</span>	
	</div>
</template>

<script>
	import { Howl } from 'Howler';

	import { eventBus } from './../main';

	export default {
		created: function () {
			window.addEventListener('keypress', this.keypress);

			this.keySound = new Howl({
				src: ['./../../../sounds/key.mp3'],
				autoplay: false,
				loop: false,
			});
		},
		destroyed: function () {
			window.removeEventListener('keypress', this.keypress);
		},
		props: ['text'],
		watch: {
			text: function () {
				this.result.length = 0;
				this.currentChar = 0;
				this.display = 'center';

				eventBus.$emit('resetStats');
			},
		},
		data: function () {
			return {
				currentChar: 0,
				result: [],
				keySound: null,
				display: 'center', 
			};
		},
		methods: {
			keypress: function (e) {
				if (this.currentChar === this.text.length) { return; }

				this.keySound.play();

				const character = String.fromCharCode(e.charCode);
				if (character === this.text[this.currentChar]) {
					this.result.push('correct');
				} else { this.result.push('incorrect'); }

				eventBus.$emit('typedCharacter');

				if (this.currentChar === 0) {
					eventBus.$emit('startTyping');
				} else if (this.currentChar === this.text.length - 1) {
					eventBus.$emit('endTyping',{
						correctCharCount: this.result.filter(r => r === 'correct').length,
					});
					this.display = 'left';
				}

				++this.currentChar;
			},
		}
	};
</script>

<style scoped>
.center {
	position: absolute;
	left: 50%;
	top: 50%;
	transform:  translateX(-50%) translateY(-50%);
}

.left {
	position: absolute;
	left: 38%;
	top: 50%;
	transform:  translateX(-50%) translateY(-50%);
}

#paragraph {
	display: block;

	width: 55%;
	height: 59%;
	min-width: 55%;
	min-height: 59%;

	font-family: consolas;
	font-weight: bold;
	font-size: calc(1.1vw + 0.55vh);
	color: #a4a4a4;

	text-align: justify;
	text-align-last: left;

	user-select: none;
	cursor: default;

	padding: 22px;
}

.correct {
	color: #7dd92b;
}

.incorrect {
	color: #d94c2b;
}

.space {
	border-bottom: 2px solid #ffffff;
}

.readySpace {
	border-color: #d9be2b;
}

.incorrectSpace {
	border-bottom: 2px solid #d94c2b;
}

.ready {
	color: #d9be2b;
}
</style>
		