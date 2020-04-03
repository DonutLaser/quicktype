<template>
	<primary-button :name="'Continue'" @click="onClick"></primary-button>
</template>

<script>
	import PrimaryButton from './PrimaryButton.vue';

	export default {
		components: {
			PrimaryButton,
		},
		methods: {
			onClick: function () { this.$emit('click'); }
		}
	};
</script>

<style scoped>
</style>
		