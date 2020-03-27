<template>
	<base-button :icon="icon"></base-button>	
</template>

<script>
	import BaseButton from './BaseButton.vue';
	export default {
		components: { BaseButton },
		props: ['icon'],
	};
</script>

<style scoped>
#btn {
	width: 2.5vw;
	height: 2.5vw;
	margin-left: 0.25vw;
}
</style>