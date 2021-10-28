import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const Layout = ({children}) => {
	return (
		<div>
			<div className="container my-2 px-md-5">{children}</div>
			<div className="py-5 bg-light">
				<div className="container px-md-5 text-center">Alfath Muqoddas ©2021 <a href="https://omdbapi.com" target="_blank" className="mx-2" >OMDb API</a><Link to="/">Home</Link></div>
			</div>
		</div>
	)
}

export default Layout;