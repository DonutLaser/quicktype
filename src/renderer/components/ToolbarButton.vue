<template>
	<button id="toolbar-button" :class="{ 'btn-first': first && !last, 'btn-last': last && !first }"
		@click="onClick()">{{ name }}</button>
</template>

<script>
	export default {
		props: ['name', 'first', 'last'],
		methods: {
			onClick: function () {
				this.$emit('click');
				document.getElementById('toolbar-button').blur();
			},
		},
	};
</script>

<style scoped>
#toolbar-button {
	width: fit-content;
	height: 100%;

	padding-left: 20px;
	padding-right: 20px;

	background-color: rgba(0, 0, 0, 0);
	color: #a4a4a4;

	font-family: Calibri;
	font-size: 16px;

	line-height: 1;

	border: none;

	user-select: none;
}

#toolbar-button:hover {
	background-color: rgba(255, 255, 255, 0.09);
	cursor: pointer;
}

#toolbar-button:active {
	background-color: rgba(255, 255, 255, 0.19);
	padding-top: 1px;
}

#toolbar-button:focus {
	outline: none;
}

.btn-first {
	border-radius: 10px 0 0 10px;
}

.btn-last {
	border-radius: 0 10px 10px 0;
}
</style>
