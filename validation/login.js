const validator = require('validator');
const _ = require('lodash');

module.exports = function validateRegisterInput(data) {
	let errors = {};

	data.email = !_.isEmpty(data.email) ? data.email : '';
	data.password = !_.isEmpty(data.password) ? data.password : '';

	if (!validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}
	if (validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}

	if (!validator.isLength(data.password, { min: 6, max: 80 })) {
		errors.password = 'Password must be between 6 and 80 characters';
	}
	if (validator.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};
