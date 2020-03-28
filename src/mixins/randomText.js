export default {
	data: function () {
		return {
			currentText: '',
		};
	},
	methods: {
		getRandomText: function () {
			this.currentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate maximus congue. Donec a neque sed augue semper ultricies non nec elit. Nullam et magna ac ipsum pharetra sagittis. Etiam interdum congue neque, et tristique quam dapibus at. Donec eu consectetur lacus, luctus imperdiet purus. Pellentesque eros urna, dapibus vel consectetur ac, vestibulum vitae tellus. Phasellus nec pharetra lorem. Aliquam egestas turpis pharetra tellus rutrum fermentum ac a ex. Ut mauris neque, auctor sed commodo at, hendrerit vitae quam. Vivamus metus magna, rhoncus a turpis quis, pretium mattis sem. Maecenas ac mauris eu sem vehicula porttitor.';
		},
	},
};