import axios from 'axios';
import {
	GET_ERRORS,
	CLEAR_ERRORS,
	GET_JOKES,
	GET_JOKE,
	GET_TOP_JOKES,
	JOKES_LOADING,
	CLEAR_JOKE
} from '../actionTypes';

export const loadingJokes = () => {
	return { type: JOKES_LOADING };
};

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

export const getJokes = () => dispatch => {
	dispatch(loadingJokes());
	axios
		.get('/api/jokes')
		.then(res =>
			dispatch({
				type: GET_JOKES,
				payload: res.data
			})
		)
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: null
			});
		});
};

export const getTopJokes = () => dispatch => {
	dispatch(loadingJokes());
	axios
		.get('/api/jokes/top')
		.then(res =>
			dispatch({
				type: GET_TOP_JOKES,
				payload: res.data
			})
		)
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: null
			});
		});
};

export const getJoke = id => dispatch => {
	dispatch(loadingJokes());
	axios
		.get(`/api/jokes/${id}`)
		.then(res =>
			dispatch({
				type: GET_JOKE,
				payload: res.data
			})
		)
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: null
			});
		});
};

export const clearJoke = () => {
	return {
		type: CLEAR_JOKE,
		payload: {}
	};
};

export const editJoke = (id, jokeData, history) => dispatch => {
	axios
		.put(`/api/jokes/${id}`, jokeData)
		.then(res => {
			history.push('/');
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const deleteJoke = (id, history) => dispatch => {
	axios
		.delete(`/api/jokes/${id}`)
		.then(res => {
			dispatch({
				type: CLEAR_JOKE,
				payload: {}
			});
			history.push('/');
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const addLike = id => dispatch => {
	axios
		.post(`/api/jokes/like/${id}`)
		.then(res => {
			dispatch(getJokes());
			dispatch(getTopJokes());
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const removeLike = id => dispatch => {
	axios
		.post(`/api/jokes/unlike/${id}`)
		.then(res => {
			dispatch(getJokes());
			dispatch(getTopJokes());
		})
		.catch(err => console.log(err));
};

export const addComment = (id, commentData) => dispatch => {
	axios
		.post(`/api/jokes/comments/${id}`, commentData)
		.then(res => {
			dispatch({
				type: GET_JOKE,
				payload: res.data
			});
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const deleteComment = (jokeId, commentId) => dispatch => {
	axios
		.delete(`/api/jokes/comments/${jokeId}/${commentId}`)
		.then(res => {
			dispatch({
				type: GET_JOKE,
				payload: res.data
			});
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
		payload: {}
	};
};
