import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
	return (
		<div>
			<div className="container">
				<Link to="/" className="text-decoration-none text-dark">
					<h1 className="pt-3">React + Omdb Movie App</h1>
				</Link>
			</div>
			<div className="container my-5">{children}</div>
			<div className="py-5 bg-light">
				<div className="container">Alfath Muqoddas 2021</div>
			</div>
		</div>
	)
}

export default Layout;