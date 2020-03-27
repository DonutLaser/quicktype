<template>
	<button id="btn">
		<vue-fontawesome :icon="icon" :size="1"></vue-fontawesome>
		<template v-if="name">{{ name }}</template>
	</button>
</template>

<script>
	export default {
		props: [
			'name',
			'icon'
		],
	};
</script>

<style scoped>
	#btn {
		background-color: rgba(0, 0, 0, 0);
		color: #a4a4a4;
		border: 1px solid #a4a4a4;
		border-radius: 5px;
	}

	#btn:hover {
		color: #c4c4c4;
		border-color: #c4c4c4;
		cursor: pointer;
	}

	#btn:active {
		color: #d9be2b;	
		border-color: #d9be2b;
		cursor: pointer;
	}

	#btn:focus {
		outline: none;
	}
</style>
