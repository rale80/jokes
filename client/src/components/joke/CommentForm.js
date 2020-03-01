import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextAreaFiedGroup from '../common/TextAreaFieldGroup';
import { addComment, clearErrors } from '../../redux/actions/jokeActions';
import { useEffect } from 'react';

const CommentForm = props => {
	const [text, setText] = useState('');
	const errors = useSelector(state => state.errors);
	const dispatch = useDispatch();
	const { jokeId } = props;

	useEffect(() => {
		return () => {
			dispatch(clearErrors());
		};
	}, [dispatch]);

	const submitCreateComment = e => {
		e.preventDefault();

		const newComment = {
			text: text
		};

		dispatch(addComment(jokeId, newComment));
		dispatch(clearErrors());
		setText('');
	};

	return (
		<div className="joke-form mb-3">
			<div className="container">
				<div className="row">
					<div className="card card-info col-md-12">
						<div className="card-header bg-info text-white">
							Add a comment ...
						</div>
						<div className="card-body">
							<form onSubmit={submitCreateComment}>
								<TextAreaFiedGroup
									onChange={e => setText(e.target.value)}
									value={text}
									name="text"
									placeholder="Reply to Joke"
									error={errors.text}
								/>
								<button type="submit" className="btn btn-dark">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentForm;
