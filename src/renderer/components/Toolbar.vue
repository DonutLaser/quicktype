<template>
	<div id="toolbar" class="outer-container">
		<toolbar-button :name="'Start Single Paragraph'" :first="true" @click="startSingleParagraph()"></toolbar-button>
		<toolbar-button :name="'Start New Session'" @click="startSession"></toolbar-button>
		<div id="btns-float-right">
			<toolbar-button :name="'Settings'" :snapRight="true" @click="openSettings"></toolbar-button>
			<toolbar-button :name="'Help'" :last="true" @click="openHelp"></toolbar-button>	
		</div>
	</div>
</template>

<script>
	import ToolbarButton from './ToolbarButton';
	import { eventBus } from './../main';

	export default {
		components: {
			ToolbarButton,
		},
		methods: {
			startSingleParagraph: function () {
				eventBus.$emit('single');
			},
			startSession: function () {
				console.log('Start New Session');
			},
			openSettings: function () {
				console.log('Settings');
			},
			openHelp: function () {
				console.log('Help');
			},
		},
	};
</script>

<style scoped>
#toolbar {
	height: 45px;
	margin: 10px 10px 10px 10px;
}
#btns-float-right {
	height: inherit;
	float: right;
}
</style>
		