<template>
	<base-button :name="name" @click="onClick"></base-button>	
</template>

<script>
	import BaseButton from './BaseButton';
	export default {
		components: { BaseButton },
		props: ['name'],
		methods: {
			onClick: function () { this.$emit('click'); },
		},
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
