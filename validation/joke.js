const validator = require('validator');
const _ = require('lodash');

module.exports = function validateJokeInput(data) {
	let errors = {};

	data.text = !_.isEmpty(data.text) ? data.text : '';
	data.category = !_.isEmpty(data.category) ? data.category : '';

	if (!validator.isLength(data.text, { min: 10, max: 2000 })) {
		errors.text = 'Joke text must be between 10 and 2000 characters';
	}
	if (validator.isEmpty(data.text)) {
		errors.text = 'Text field is required';
	}

	if (
		!validator.isIn(data.category, [
			'Blondies',
			'Cops',
			'Gypsies',
			'Black Humour',
			'Animals',
			'Sex',
			'Dumb',
			'Q&A',
			'Nations',
			'Other'
		])
	) {
		errors.category = 'Joke category is not correct';
	}
	if (validator.isEmpty(data.category)) {
		errors.category = 'Category field is required';
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};
