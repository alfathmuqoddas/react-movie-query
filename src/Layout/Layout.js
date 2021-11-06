import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const Layout = ({children}) => {
	return (
		<div>
			<div className="container my-1 px-md-5" style={{'font-family':'sans-serif'}}>{children}</div>
			<div className="py-5 bg-light">
				<div className="container px-md-5 text-center">Alfath Muqoddas ©2021</div>
			</div>
		</div>
	)
}

export default Layout;