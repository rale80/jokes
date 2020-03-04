import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import NewJoke from './components/pages/NewJoke';
import EditJoke from './components/pages/EditJoke';
import Joke from './components/joke/Joke';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Footer from './components/layout/Footer';
import PrivateRoute from './components/common/PrivateRoute';
import { setCurrentUser } from './redux/actions/authActions';
import setAuthHeader from './utils/setAuthHeader';
import './App.css';

function App() {
	const dispatch = useDispatch();

	// Check for token
	if (localStorage['jwtToken']) {
		setAuthHeader(localStorage['jwtToken']);
		const decoded = jwtDecode(localStorage['jwtToken']);
		dispatch(setCurrentUser(decoded));
	}

	return (
		<Router>
			<div className="app container">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoute path="/newjoke" component={NewJoke} />
					<PrivateRoute path="/joke/:id/edit" component={EditJoke} />
					<PrivateRoute path="/joke/:id" component={Joke} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
