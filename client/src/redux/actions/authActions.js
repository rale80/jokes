import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from '../actionTypes';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';

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
export const loginUser = (userData, history, from) => dispatch => {
	axios
		.post('/api/users/login', userData)
		.then(res => {
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			setAuthHeader(token);

			const decoded = jwtDecode(token);
			dispatch(setCurrentUser(decoded));
			history.replace(from);
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

// Set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// Logout user
export const logoutUser = () => dispatch => {
	localStorage.removeItem('jwtToken');
	setAuthHeader(false);
	dispatch(setCurrentUser({}));
};

// Clear errrors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
		payload: {}
	};
};
