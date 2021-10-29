import React from 'react';
import Navbar from '../../Layout/Navbar';
import {Link} from 'react-router-dom';

const UserSignedOut = () => {
	return (
		<Navbar navTitle={"User Signed Out"} navLink={"/firebase-app"} navColor={"bg-danger"} />
	)
}

export default UserSignedOut;