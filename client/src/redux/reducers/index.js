import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import jokeReducer from './jokeReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	jokes: jokeReducer
});
