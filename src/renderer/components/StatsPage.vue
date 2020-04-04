<template>
	<div id="stats">
		<table>
			<tr>
				<td class="stat-name">Average WPM</td>
				<td class="stat-value">{{ data.avgWpm }}</td>
			</tr>
			<tr>
				<td class="stat-name">Accuracy %</td>
				<td class="stat-value">{{ data.accuracy }}</td>
			</tr>
			<tr>
				<td class="stat-name">Fastest WPM</td>
				<td class="stat-value">{{ data.maxWpm }}</td>
			</tr>
			<tr>
				<td class="stat-name">Slowest WPM</td>
				<td class="stat-value">{{ data.minWpm }}</td>
			</tr>
		</table>
		<div id="btn">
			<continue-button @click="clickContinue"></continue-button>
		</div>
	</div>
</template>

<script>
	import ContinueButton from './ContinueButton';
	export default {
		created: function () {
			window.addEventListener('keydown', this.keydown);
		},
		destroyed: function () {
			window.removeEventListener('keydown', this.keydown);
		},
		components: {
			ContinueButton,
		},
		props: ['data'],
		methods: {
			clickContinue: function () {
				this.$emit('back-to-menu', { showStatus: false });
			},
			keydown: function (e) {
				if (e.key === 'Enter') { this.clickContinue(); }
			}
		},
	};
</script>

<style scoped>
table {
	position: absolute;
	left: 50%;
	top: 10%;
	transform: translateX(-50%);

	width: 35%;
}

.stat-name, .stat-value {
	color: #a4a4a4;
	font-family: Arial;
	font-weight: bold;
	font-size: 3.3vw;

	user-select: none;
	cursor: default;
}

.stat-value {
	color: #d9be2b;
	text-align: right;
}

#btn {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	width: 22.5vw;
}
</style>
