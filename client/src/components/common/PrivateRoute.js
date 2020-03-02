import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector(state => state.auth);
	const location = useLocation();

	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
