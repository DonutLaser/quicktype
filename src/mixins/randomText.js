export default {
	data: function () {
		return {
			currentText: '',
		};
	},
	methods: {
		getRandomText: function () {
			this.currentText = 'Hello, darkness, my old friend';
		},
	},
};