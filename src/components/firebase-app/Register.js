import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar';
import {Link, useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleRegister = (e) => {
		e.preventDefault();
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
	    // Signed in 
	    const user = userCredential.user;
	    console.log(user);
	    // ...
	  }).then(() => {
	  	history.push('/firebase-app');
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    console.log(errorMessage);
	    // ..
	  });
	};

	return (
		<div className="container text-center my-5">
			<h3>Register New Account</h3>
			<form onSubmit={handleRegister} className="mx-auto" style={{width: "500px"}}>
				<input type="email" className="form-control mb-2" placeholder="enter email..." value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" className="form-control mb-2" placeholder="enter password..." value={password} onChange={(e) => setPassword(e.target.value)} />
				<input type="submit" className="input-group-text btn btn-primary" value="Register" />
			</form>
		</div>
	)
}

export default Register;