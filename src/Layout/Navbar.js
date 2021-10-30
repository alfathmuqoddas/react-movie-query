import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Navbar.css";
import { auth } from "../components/firebase-app/Firebase";
import { signOut } from "firebase/auth";

const Navbar = (props) => {
	Navbar.defaultProps = {
		navColor: 'bg-dark'
	}
    
	const user = auth.currentUser
	const history = useHistory();
	console.log("user = " + user);

	const SignOut = (e) => {
		e.preventDefault();
		signOut(auth).then(() => {
			history.push('/firebase-app');
		});
	}

	return (
		<>
			<div className="nav">
			  <input type="checkbox" id="nav-check" />
			  <div className="nav-header">
			    <div className="nav-title">
			      <Link to="/firebase-app" className="text-light text-decoration-none">React Firebase</Link>
			    </div>
			  </div>
			  <div className="nav-btn">
			    <label htmlFor="nav-check">
			      <span></span>
			      <span></span>
			      <span></span>
			    </label>
			  </div>

			  	{ user ? 
			  		<div className="nav-links">
				  		<a onClick={SignOut}>Logout</a> 
				  	</div> 
					:
				  	<div className="nav-links">
			  			<Link to="/firebase-app/login">Login</Link>
			  			<Link to="/firebase-app/register">Register</Link>
			  		</div>
			  	}

			</div>
		</>
	)
}

export default Navbar;