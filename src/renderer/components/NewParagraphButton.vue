<template>
	<primary-button :name="'New paragraph'" @click="onClick"></primary-button>
</template>

<script>
	import PrimaryButton from './PrimaryButton.vue';

	export default {
		components: { PrimaryButton },
		methods: {
			onClick: function () { this.$emit('click'); },
		},
	};
</script>
