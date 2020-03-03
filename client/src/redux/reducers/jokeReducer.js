import {
	ADD_JOKE,
	GET_JOKES,
	JOKES_LOADING,
	GET_TOP_JOKES,
	GET_JOKE,
	CLEAR_JOKE
} from '../actionTypes';

const initialState = {
	jokes: [],
	topjokes: [],
	joke: {},
	loading: false,
	like: false
};

const jokeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_JOKE:
			return {
				...state,
				jokes: [action.payload, ...state.jokes]
			};
		case JOKES_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_JOKES:
			return {
				...state,
				jokes: action.payload,
				loading: false
			};
		case GET_TOP_JOKES:
			return {
				...state,
				topjokes: action.payload,
				loading: false
			};
		case GET_JOKE:
			return {
				...state,
				joke: action.payload,
				loading: false
			};
		case CLEAR_JOKE:
			return {
				...state,
				joke: action.payload
			};
		default:
			return state;
	}
};

export default jokeReducer;
