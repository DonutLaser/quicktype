<template>
	<div id="typing-page">
		<paragraph :text="currentText"></paragraph>
		<stats></stats>		
	</div>
</template>

<script>
	import Paragraph from './Paragraph';
	import Stats from './Stats';

	import randomText from './../../mixins/randomText';

	export default {
		components: {
			Paragraph,
			Stats,
		},
		mixins: [randomText],
		props: ['mode'],
		watch: {
			mode: {
				handler: function (newValue) {
					if (!newValue) {
						this.currentText = '';
						return;
					}

					if (newValue === 'single') {
						this.getRandomText();
					}
				},
				immediate: true,
			},
		},
	};
</script>

<style scoped>
#typing-page {
	width: 100%;
	height: 100%;
}

/*#container {
	display: inline-block;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
}*/
</style>
