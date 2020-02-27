const validator = require('validator');
const _ = require('lodash');

module.exports = function validateCommentInput(data) {
	let errors = {};

	data.text = !_.isEmpty(data.text) ? data.text : '';

	if (!validator.isLength(data.text, { min: 10, max: 200 })) {
		errors.text = 'Comment must be between 10 and 200 characters';
	}
	if (validator.isEmpty(data.text)) {
		errors.text = 'Text field is required';
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};
