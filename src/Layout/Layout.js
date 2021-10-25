import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
	return (
		<div>
			<div className="bg-primary shadow-sm">
				<div className="container px-md-5 py-2">
					<Link to="/movie" className="text-decoration-none">
						<h1 className="text-light">REACT MOVIE APP</h1>
					</Link>
				</div>
			</div>
			<div className="container my-2 px-md-5">{children}</div>
			<div className="py-5 bg-light">
				<div className="container px-md-5 text-center">Alfath Muqoddas 2021 <a href="https://omdbapi.com" target="_blank">OMDb API</a></div>
			</div>
		</div>
	)
}

export default Layout;