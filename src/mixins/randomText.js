import axios from 'axios';
import asciifolder from 'fold-to-ascii';

export default {
	data: function () {
		return {
			currentText: '',
		};
	},
	methods: {
		getRandomText: async function () {
			const titleResp = await axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*');
			const title = titleResp.data.query.random[0].title.split('/')[0]; // The title has several for some reason, e.g., Title1/Title2/Title3, so pick the first one

			const textResp = await axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=5&explaintext=1&origin=*&titles=' + encodeURIComponent(title));
			this.currentText = asciifolder.foldReplacing(textResp.data.query.pages[Object.keys(textResp.data.query.pages)[0]].extract).replace(/==|===/g, '~');
		},
	},
};