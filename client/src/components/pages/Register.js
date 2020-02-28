import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
// import { connect } from 'react-redux';
// import { registerUser, clearErrors } from '../../redux/actions/authActions';

const Register = props => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	// componentDidMount() {
	// 	if (this.props.auth.isAuthenticated) {
	// 		this.props.history.push('/dashboard');
	// 	}
	// }
	// componentWillUnmount() {
	// 	this.props.clearErrors();
	// }

	const submitRegister = e => {
		e.preventDefault();
		const newUser = { username, email, password, password2 };
		console.log(newUser);
		// this.props.registerUser(newUser, this.props.history);
	};

	// const { errors } = this.props;

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
								onChange={e => setUsername(e.target.username)}
								type="text"
								placeholder="Username"
								name="username"
								// error={errors.username}
							/>
							<TextFieldGroup
								value={email}
								onChange={e => setEmail(e.target.email)}
								type="text"
								placeholder="Email Address"
								name="email"
								// error={errors.email}
							/>
							<TextFieldGroup
								value={password}
								onChange={e => setPassword(e.target.password)}
								type="password"
								placeholder="Password"
								name="password"
								// error={errors.password}
							/>
							<TextFieldGroup
								value={password2}
								onChange={e => setPassword2(e.target.password2)}
								type="password"
								placeholder="Confirm Password"
								name="password2"
								// error={errors.password2}
							/>
							<input type="submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

export default Register;
