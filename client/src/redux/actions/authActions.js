import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from '../actionTypes';
import axios from 'axios';

// Register user
export const registerUser = (userData, history) => dispatch => {
	axios
		.post('/api/users/register', userData)
		.then(res => history.push('/login'))
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

// Login user
export const loginUser = (userData, history) => dispatch => {};

// Set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// Clear errrors (my addition)
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
		payload: {}
	};
};
