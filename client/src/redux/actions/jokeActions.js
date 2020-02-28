import axios from 'axios';
import { GET_ERRORS, CLEAR_ERRORS } from '../actionTypes';

export const addJoke = (jokeData, history) => dispatch => {
	axios
		.post('/api/jokes', jokeData)
		.then(res => history.push('/'))
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

// Clear errrors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
		payload: {}
	};
};
