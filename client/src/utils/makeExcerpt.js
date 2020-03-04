const makeExcerpt = (txt, excerptLength) => {
	const checkWhiteSpaceIndex = txt => {
		let index;
		for (let i = excerptLength; i < txt.length; i++) {
			if (txt[i] === ' ') {
				index = i;
				break;
			}
		}
		return index;
	};

	let excerpt;
	if (txt.length > excerptLength) {
		excerpt = txt.slice(0, checkWhiteSpaceIndex(txt));
		return excerpt;
	}
	return txt;
};

export default makeExcerpt;
