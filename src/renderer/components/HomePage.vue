<template>
	<div id="home-page">
		<div id="secondary-button-bar">
			<settings-button></settings-button>
			<help-button></help-button>
		</div>
	</div>
</template>

<script>
	import HelpButton from './HelpButton.vue';
	import SettingsButton from './SettingsButton.vue';

	export default {
		components: {
			HelpButton,
			SettingsButton,
		},
	};
</script>

<style scoped>
	#secondary-button-bar {
		position: absolute;
		bottom: 30px;
		right: 30px;
		width: fit-content;
	}
</style>