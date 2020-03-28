<template>
	<div id="version">
		Quicktype v{{ version }}
	</div>
</template>

<script>
	import pkg from './../../../package.json';

	export default {
		data: function () {
			return {
				version: pkg.version,
			};
		},
	};
</script>

<style scoped>
#version {
	position: absolute;
	bottom: 30px;
	left: 30px;

	font-family: Consolas;
	font-size: 1vw;
	color: #a4a4a4;
}
</style>