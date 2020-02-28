import { ADD_JOKE } from '../actionTypes';

const initialState = {
	jokes: [],
	joke: {},
	loading: false
};

const jokeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_JOKE:
			return {
				...state,
				jokes: [action.payload, ...state.jokes]
			};
		default:
			return state;
	}
};

export default jokeReducer;
