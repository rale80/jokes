import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

const Login = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// componentDidMount() {
	// 	if (this.props.auth.isAuthenticated) {
	// 		this.props.history.push('/dashboard');
	// 	}
	// }
	// componentWillUnmount() {
	// 	this.props.clearErrors();
	// }

	const submitLogin = e => {
		e.preventDefault();
		const userData = { email, password };
		console.log(userData);
		// this.props.loginUser(userData, this.props.history);
	};

	// const { errors } = this.props;

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
								// error={errors.email}
							/>
							<TextFieldGroup
								value={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
								name="password"
								// error={errors.password}
							/>
							<input type="submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

// Login.propTypes = {
// 	loginUser: PropTypes.func.isRequired,
// 	clearErrors: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired
// };

export default Login;
