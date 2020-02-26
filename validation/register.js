const validator = require('validator');
const _ = require('lodash');

module.exports = function validateRegisterInput(data) {
	let errors = {};

	data.name = !_.isEmpty(data.username) ? data.username : '';
	data.email = !_.isEmpty(data.email) ? data.email : '';
	data.password = !_.isEmpty(data.password) ? data.password : '';
	data.password2 = !_.isEmpty(data.password2) ? data.password2 : '';

	if (!validator.isLength(data.username, { min: 2, max: 30 })) {
		errors.username = 'Username must be between 2 and 30 characters';
	}
	if (validator.isEmpty(data.username)) {
		errors.username = 'Username field is required';
	}

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

	if (!validator.equals(data.password, data.password2)) {
		errors.password2 = 'Passwords must match';
	}
	if (validator.isEmpty(data.password2)) {
		errors.password2 = 'Confirm Password field is required';
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};
