import axios from 'axios';

export default {
	data: function () {
		return {
			currentText: '',
		};
	},
	methods: {
		getRandomText: function () {
			let title = '';
			axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*')
				.then(resp => {
					title = resp.data.query.random[0].title.split('/')[0];
					axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=5&explaintext=1&origin=*&titles=' + encodeURIComponent(title))	
						.then(resp => {
							console.log(resp);
							this.currentText = resp.data.query.pages[Object.keys(resp.data.query.pages)[0]].extract;
						});
				});
		},
	},
};