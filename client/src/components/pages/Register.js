import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { registerUser, clearErrors } from '../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';

const Register = props => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	const auth = useSelector(state => state.auth);
	const errors = useSelector(state => state.errors);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (auth.isAuthenticated) {
			history.push('/');
		}
		return () => {
			dispatch(clearErrors());
		};
	}, [auth.isAuthenticated, dispatch, history]);

	const submitRegister = e => {
		e.preventDefault();
		const newUser = { username, email, password, password2 };
		dispatch(registerUser(newUser, history));
	};

	return (
		<div className="register">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<h1 className="display-4 text-center">Sign Up</h1>
						<p className="lead text-center">Create your Jokes account</p>
						<form onSubmit={submitRegister} noValidate>
							<TextFieldGroup
								value={username}
								onChange={e => setUsername(e.target.value)}
								type="text"
								placeholder="Username"
								name="username"
								error={errors.username}
							/>
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
							<TextFieldGroup
								value={password2}
								onChange={e => setPassword2(e.target.value)}
								type="password"
								placeholder="Confirm Password"
								name="password2"
								error={errors.password2}
							/>
							<input type="submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
