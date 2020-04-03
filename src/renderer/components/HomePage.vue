<template>
	<div id="home-page">
		<div id="primary-button-bar">
			<new-paragraph-button @click="clickNewParagraph"></new-paragraph-button>
			<new-custom-paragraph-button></new-custom-paragraph-button>
		</div>
		<div id="secondary-button-bar">
			<settings-button></settings-button>
			<help-button></help-button>
		</div>
		<version></version>
	</div>
</template>

<script>
	import HelpButton from './HelpButton.vue';
	import SettingsButton from './SettingsButton.vue';
	import NewParagraphButton from './NewParagraphButton.vue';
	import NewCustomParagraphButton from './NewCustomParagraphButton.vue';
	import Version from './Version.vue';

	export default {
		created: function () {
			window.addEventListener('keypress', this.keypress);
		},
		destroyed: function () {
			window.removeEventListener('keypress', this.keypress);
		},
		components: {
			HelpButton,
			SettingsButton,
			NewParagraphButton,
			NewCustomParagraphButton,
			Version,
		},
		methods: {
			clickNewParagraph: function () { this.$emit('onClickNew'); },
			keypress: function (e) {
				if (e.code === 'KeyN' && e.ctrlKey) { this.clickNewParagraph(); }
			}
		},
	};
</script>

<style scoped>
	#primary-button-bar {
		position: absolute;
		top: 50%;
		left: 50%;
		transform:  translateY(-50%) translateX(-50%);
		width: 22.5vw;
	}
	#secondary-button-bar {
		position: absolute;
		bottom: 30px;
		right: 30px;
		width: fit-content;
	}
</style>