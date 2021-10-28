import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	Navbar.defaultProps = {
		navColor: 'bg-danger'
	}

	return (
		<div className={props.navColor}>
			<div className="shadow-sm">
				<div className="container px-md-5 py-2">
					<Link to={props.navLink} className="text-decoration-none">
						<h4 className="text-light">{props.navTitle}</h4>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar;