import jwtDecode from 'jwt-decode';
import { logoutUser } from '../redux/actions/authActions';

const checkTokenExpirationMiddleware = store => next => action => {
	if (localStorage['jwtToken']) {
		const decoded = jwtDecode(localStorage['jwtToken']);
		const currentTime = Date.now() / 1000;

		if (decoded.exp < currentTime) {
			next(action);
			store.dispatch(logoutUser());
			window.location.href = '/login';
		}
	}

	next(action);
};

export default checkTokenExpirationMiddleware;
