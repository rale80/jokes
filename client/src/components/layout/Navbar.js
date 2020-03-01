import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

const Navbar = props => {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const onLogoutClick = e => {
		e.preventDefault();
		dispatch(logoutUser());
	};

	return (
		<header className="main-header">
			<nav className="navbar navbar-expand-md navbar-light">
				<Link className="navbar-brand" to="/">
					Jokes
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/newjoke">
								New Joke
							</Link>
						</li>
						{auth.isAuthenticated ? (
							<li className="nav-item">
								<Link className="nav-link" to="#" onClick={onLogoutClick}>
									<i className="fas fa-user-astronaut"></i> Logout
								</Link>
							</li>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/register">
										Register
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login">
										Login
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
