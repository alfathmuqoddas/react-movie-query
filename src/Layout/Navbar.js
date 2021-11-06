import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Navbar.css";
import { auth } from "../components/firebase-app/Firebase";
import { signOut } from "firebase/auth";

const Navbar = (props) => {
	Navbar.defaultProps = {
		navColor: 'bg-dark'
	}
    
	const user = auth.currentUser;
	const history = useHistory();

	const SignOut = (e) => {
		e.preventDefault();
		signOut(auth).then(() => {
			history.push('/firebase-app');
		});
	}

	return (
		<>
			<div className="nav" style={{fontFamily: 'sans-serif'}}>
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
			  			<button className="btn-nav">{user.displayName || user.email}</button>
				  		<button className="btn-nav" onClick={SignOut}>Logout</button> 
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