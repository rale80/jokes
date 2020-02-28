import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { addJoke } from '../../redux/actions/jokeActions';
import { clearErrors } from '../../redux/actions/jokeActions';

const NewJoke = props => {
	const [text, setText] = useState('');
	const [category, setCategory] = useState('');

	const errors = useSelector(state => state.errors);
	const dispatch = useDispatch();

	const options = [
		{ label: '---Select category---', value: 0 },
		{ label: 'Blondies', value: 'Blondies' },
		{ label: 'Cops', value: 'Cops' },
		{ label: 'Gypsies', value: 'Gypsies' },
		{ label: 'Black Humour', value: 'Black Humour' },
		{ label: 'Animals', value: 'Animals' },
		{ label: 'Sex', value: 'Sex' },
		{ label: 'Dumb', value: 'Dumb' },
		{ label: 'Nations', value: 'Nations' },
		{ label: 'Other', value: 'Other' }
	];

	useEffect(() => {
		return () => {
			dispatch(clearErrors());
		};
	}, [dispatch]);

	const submitNewJoke = e => {
		e.preventDefault();
		const jokeData = { text, category };
		dispatch(addJoke(jokeData, props.history));
	};

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
								error={errors.text}
							/>
							<SelectListGroup
								value={category}
								onChange={e => setCategory(e.target.value)}
								name="category"
								options={options}
								error={errors.category}
							/>
							<input type="submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewJoke;
