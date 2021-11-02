import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar';
import {Link, useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const auth = getAuth();
	const userAuth = auth.currentUser;


	const handleRegister = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
	    // Signed in 
	    const user = userCredential.user;
	    console.log(user);
	    // ...
	  }).then(() => {
	  	history.push('/edit-profile');
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    console.log(errorMessage);
	    // ..
	  });
	};

	return (
		<>
			<Navbar />
			{userAuth ? 
			<div className="container my-5">
				<h3 className="text-center">You Already Logged In</h3>
			</div>
			:
			<div className="container my-5">
				<h3 className="text-center">Register New Account</h3>
				<form onSubmit={handleRegister} className="mx-auto my-4" style={{width: "500px"}}>
					<label htmlFor="email">Register Email</label>
					<input type="email" name="email" className="form-control mt-2 mb-3" placeholder="enter email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
					<label htmlFor="password">Create Password</label>
					<input type="password" name="password" className="form-control my-2" placeholder="enter password..." value={password} onChange={(e) => setPassword(e.target.value)} required />
					<input type="submit" className="input-group-text btn btn-primary" value="Register" />
				</form>
				<div className="text-center">Already have an account? Login <Link to="/firebase-app/login">here</Link></div>
			</div>
			}
		</>
	)
}

export default Register;