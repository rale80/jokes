import React from 'react';
import { Link } from 'react-router-dom';

const Modal = props => {
	return (
		<div className="modal" tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Alert</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>You must be logged in to like or unlike</p>
					</div>
					<div className="modal-footer">
						<Link to="/register" className="btn btn-primary">
							Register
						</Link>
						<Link to="/login" className="btn btn-primary">
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
