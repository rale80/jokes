import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ jokesPerPage, totalJokes, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(num => (
					<li key={num} className="page-item">
						<button onClick={() => paginate(num)} className="page-link">
							{num}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	jokesPerPage: PropTypes.number.isRequired,
	totalJokes: PropTypes.number.isRequired,
	paginate: PropTypes.func.isRequired
};

export default Pagination;
