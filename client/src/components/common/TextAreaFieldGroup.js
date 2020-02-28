import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
	name,
	rows,
	placeholder,
	value,
	error,
	info,
	onChange
}) => {
	return (
		<div className="form-group">
			<textarea
				value={value}
				rows={rows}
				onChange={onChange}
				placeholder={placeholder}
				name={name}
				className={classNames('form-control form-control-lg', {
					'is-invalid': error
				})}
			/>
			{info && <small className="form-text text-muted">{info}</small>}
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

TextAreaFieldGroup.propTypes = {
	name: PropTypes.string.isRequired,
	rows: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	info: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
