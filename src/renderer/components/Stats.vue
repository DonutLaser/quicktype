<template>
	<div id="stats" class="inner-container" :class="{ 'show-stats': display, 'hide-stats': !display }">
		<h3>RESULTS</h3>
		<table>
			<tr>
				<td class="stat-name">Accuracy (%)</td>
				<td class="stat-value">{{ accuracy }}</td>
			</tr>
			<tr>
				<td class="stat-name">Average WPM</td>
				<td class="stat-value">{{ avg }}</td>
			</tr>
			<tr>
				<td class="stat-name">Fastest WPM</td>
				<td class="stat-value">{{ max }}</td>
			</tr>
			<tr>
				<td class="stat-name">Slowest WPM</td>
				<td class="stat-value">{{ min }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import { eventBus } from './../main';

	export default {
		created: function () {
			eventBus.$on('resetStats', this.resetStats);
			eventBus.$on('startTyping', this.startTyping);
			eventBus.$on('endTyping', this.endTyping);
			eventBus.$on('typedCharacter', this.onCharacterTyped);
		},
		data: function () {
			return {
				typed: 0,
				accuracy: 0,
				avg: 0,
				max: 0,
				min: 0,
				display: false,
				startTime: 0,
				endTimeInMin: 0.0,
				wpms: [],
			};
		},
		methods: {
			resetStats: function () {
				this.display = false;
			},
			startTyping: function () {
				const calculate = () => {
					const now = new Date().getTime();
					const end = now - this.startTime;

					this.endTimeInMin = (end / 1000) / 60;

					const wpm = Math.round((this.typed / 5) / this.endTimeInMin);
					this.wpms.push(wpm);
				};

				calculate();

				this.startTime = new Date().getTime();
				this.timer = setInterval(calculate, 1000);
			},
			endTyping: function (textInfo) {
				clearInterval(this.timer);

				this.accuracy = Math.round((textInfo.correctCharCount / this.typed) * 100);
				const stats = this.wpms.filter(wpm => wpm > 0);

				if (stats.length > 0) {
					this.avg = Math.round(stats.reduce((accum, curr) => accum + curr) / stats.length);
					this.min = Math.min(...stats);
					this.max = Math.max(...stats);
				}

				this.display = true;
			},
			onCharacterTyped: function () {
				++this.typed;
			}
		}
	};
</script>

<style scoped>
.show-stats {
	display: block;

	position: absolute;
	right: 20%;
	top: 50%;
	transform:  translateX(50%) translateY(-50%);
}

.hide-stats {
	display: none;
}

#stats {
	width: 18%;
	height: 59%;

	font-family: consolas;
	font-weight: bold;
	font-size: calc(1.1vw + 0.55vw);

	color: #a4a4a4;

	padding: 22px;
}

h3 {
	width: 100%;
	text-align: center;

	color: #7dd92b;

	margin-bottom: 5px;
}

table {
	width: 100%;
}

.stat-name {
	text-align: left;
}

.stat-value {
	color: #d9be2b;
	text-align: right;
}

</style>
		