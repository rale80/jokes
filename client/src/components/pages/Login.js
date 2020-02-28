import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { loginUser, clearErrors } from '../../redux/actions/authActions';

const Login = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const auth = useSelector(state => state.auth);
	const errors = useSelector(state => state.errors);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.isAuthenticated) {
			props.history.push('/');
		}

		return () => {
			dispatch(clearErrors());
		};
	}, [auth.isAuthenticated, dispatch, props.history]);

	const submitLogin = e => {
		e.preventDefault();
		const userData = { email, password };

		dispatch(loginUser(userData, props.history));
	};

	return (
		<div className="login">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<h1 className="display-4 text-center">Log In</h1>
						<p className="lead text-center">Sign in to your Jokes account</p>
						<form onSubmit={submitLogin}>
							<TextFieldGroup
								value={email}
								onChange={e => setEmail(e.target.value)}
								type="text"
								placeholder="Email Address"
								name="email"
								error={errors.email}
							/>
							<TextFieldGroup
								value={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
								name="password"
								error={errors.password}
							/>
							<input type="submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
