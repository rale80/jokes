import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import { connect } from 'react-redux';
// import { loginUser, clearErrors } from '../../redux/actions/authActions';

const NewJoke = props => {
	const [text, setText] = useState('');

	// componentDidMount() {
	// 	if (this.props.auth.isAuthenticated) {
	// 		this.props.history.push('/dashboard');
	// 	}
	// }
	// componentWillUnmount() {
	// 	this.props.clearErrors();
	// }

	const submitNewJoke = e => {
		e.preventDefault();
		const jokeData = { text };
		console.log(jokeData);
		// this.props.saveJoke(jokeData, this.props.history);
	};

	// const { errors } = this.props;

	return (
		<div className="newjoke">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<h1 className="display-4 text-center">Create New Joke</h1>
						<p className="lead text-center">Sign in to your Jokes account</p>
						<form onSubmit={submitNewJoke}>
							<TextAreaFieldGroup
								value={text}
								rows={5}
								onChange={e => setText(e.target.value)}
								type="text"
								placeholder="Joke text"
								name="text"
								// error={errors.text}
							/>
							<input type="submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

NewJoke.propTypes = {
	clearErrors: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

export default NewJoke;
