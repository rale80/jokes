import React from 'react';
import Featured from '../jokes/Featured';
import JokesList from '../jokes/JokesList';

const Home = props => {
	return (
		<>
			<div className="info">
				<p>
					Everyone enjoys a good laugh, it’s a great way to make you feel good
					and be happy. Laughter strengthens your immune system, boosts mood,
					diminishes pain, and protects you from the damaging effects of stress.
					Nothing works faster or more dependably to bring your mind and body
					back into balance than a good laugh. Humor lightens your burdens,
					inspires hope, connects you to others, and keeps you grounded,
					focused, and alert. It also helps you release anger and forgive
					sooner.
				</p>
			</div>
			<hr />
			<Featured />
			<JokesList />
		</>
	);
};

export default Home;
