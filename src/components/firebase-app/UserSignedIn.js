import React from 'react';
import Navbar from '../../Layout/Navbar';
import {Link} from 'react-router-dom';

const UserSignedIn = () => {
	return (
		<Navbar navTitle={"User Signed In"} navLink={"/firebase-app"} navColor={"bg-success"} />
	)
}

export default UserSignedIn;