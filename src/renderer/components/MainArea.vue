<template>
	<div id="main-area" class="outer-container"> 
		<logo-page v-if="page === 'logo'"></logo-page>
		<typing-page v-if="page === 'typing'" :mode="typingMode"></typing-page>
	</div>
</template>

<script>
	import LogoPage from './LogoPage';
	import TypingPage from './TypingPage';

	import { eventBus } from './../main';

	export default {
		created: function () {
			this.typingMode = '';
			eventBus.$on('single', this.startSingle);
		},
		components: {
			LogoPage,
			TypingPage,
		},
		data: function () {
			return {
				page: 'logo',
				typingMode: '',
			};
		},
		methods: {
			startSingle: function () {
				this.page = 'typing';
				this.typingMode = '';

				setTimeout(this.single, 0);
			},
			single: function () {
				this.page = 'typing';
				this.typingMode = 'single';
			},
		},
	};
</script>

<style scoped>
#main-area {
	height: calc(100% - 80px);
	margin: 0 10px 10px 10px;
}

#logo {
	position: relative;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
}
</style>
		