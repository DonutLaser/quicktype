<template>
	<base-button :name="name"></base-button>	
</template>

<script>
	import BaseButton from './BaseButton.vue';
	export default {
		components: { BaseButton },
		props: ['name'],
	};
</script>

<style scoped>
	#btn {
		height: 3vw;
		width: inherit;
		padding-left: 20px;
		padding-right: 20px;
		display: block;
		margin-bottom: 10px;
		font-size: 1.5vw;
	}
</style>
