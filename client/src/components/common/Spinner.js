import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => {
	return props.isTopRated ? (
		<div className="lds-dual-ring-red"></div>
	) : (
		<div className="lds-dual-ring-blue"></div>
	);
};

Spinner.propTypes = {
	isTopRated: PropTypes.bool
};

export default Spinner;
