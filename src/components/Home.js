import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return(
		<div className="container my-5">
			<Link to='/movie' className="text-decoration-none"><h4>Movie Query App</h4></Link>
			<Link to='/firebase-app' className="text-decoration-none"><h4>Firebase CRUD App</h4></Link>
		</div>
	);
}

export default Home;