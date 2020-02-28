import { SET_CURRENT_USER } from '../actionTypes';
import isEmpty from 'lodash';

const initialState = {
	isLoading: false,
	user: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isLoading: !isEmpty(state.payload),
				user: action.payload
			};
		default:
			return state;
	}
};

export default authReducer;
