import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import NewJoke from './components/pages/NewJoke';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
	return (
		<Router>
			<div className="app container">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/newjoke" component={NewJoke} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
