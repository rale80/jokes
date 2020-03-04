import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { editJoke } from '../../redux/actions/jokeActions';
import { clearErrors } from '../../redux/actions/jokeActions';
import { useHistory, useParams } from 'react-router-dom';

const EditJoke = props => {
	const { joke } = useSelector(state => state.jokes);
	const auth = useSelector(state => state.auth);
	const errors = useSelector(state => state.errors);

	const [text, setText] = useState(joke.text);
	const [category, setCategory] = useState(joke.category);

	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

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
		if (!auth.isAuthenticated || auth.user.id !== joke.author) {
			history.push(`/joke/${id}`);
		}

		return () => {
			dispatch(clearErrors());
		};
	}, [id, auth.isAuthenticated, auth.user.id, joke.author, history, dispatch]);

	const submitEditJoke = e => {
		e.preventDefault();
		const jokeData = { text, category };
		dispatch(editJoke(id, jokeData, history));
	};

	return (
		<div className="editjoke">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<h1 className="display-4 text-center">Edit Joke</h1>
						<form onSubmit={submitEditJoke}>
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

export default EditJoke;
