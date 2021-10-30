import React, {useState} from 'react';
import Navbar from '../../Layout/Navbar';
import {Link, useHistory} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleRegister = (e) => {
		e.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
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
		<>
			<Navbar />
			<div className="container my-5 text-center">
				<h3>Login</h3>
				<form onSubmit={handleRegister} className="mx-auto my-3" style={{width: "500px"}}>
					<input type="email" className="form-control mb-2" placeholder="enter email..." value={email} onChange={(e) => setEmail(e.target.value)} />
					<input type="password" className="form-control mb-2" placeholder="enter password..." value={password} onChange={(e) => setPassword(e.target.value)} />
					<input type="submit" className="input-group-text btn btn-primary" value="Register" />
				</form>
				<div>Doesn't have an account? Register <Link to="/firebase-app/register">here</Link></div>
			</div>
		</>
	)
}

export default Login;