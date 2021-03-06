import React, {useState} from 'react';
import Navbar from '../../Layout/Navbar';
import {Link, useHistory} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
	const auth = getAuth();
	const userAuth = auth.currentUser;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleRegister = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
	    // Signed in 
	  	history.push('/firebase-app');
	    //const user = userCredential.user;
	    // ...
	  })
	  .catch((error) => {
	    alert(error.message);
	    // ..
	  });
	  setEmail('');
	  setPassword('');
	};

	return (
		<>
			<Navbar />
			{
			userAuth ?
			<div className="container my-5">
				<h3 className="text-center">You Already Logged In</h3>
			</div>
			:
			<div className="container my-5">
				<h3 className="text-center">Login</h3>
				<form onSubmit={handleRegister} className="mx-auto my-4 w-100" style={{maxWidth: "500px"}}>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" className="form-control mt-2 mb-3" placeholder="enter email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" className="form-control my-2" placeholder="enter password..." value={password} onChange={(e) => setPassword(e.target.value)} required />
					<input type="submit" className="input-group-text btn btn-primary" value="Login" />
				</form>
				<p className="text-center">Doesn't have an account? Register <Link to="/firebase-app/register">here</Link></p>
			</div>
			}
		</>
	)
}

export default Login;