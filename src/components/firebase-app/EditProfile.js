import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar';
//import {Link, useHistory} from 'react-router-dom';
import {getAuth} from "firebase/auth";

const EditProfile = () => {
	const user = getAuth().currentUser;
	console.log(user);
	
	return (
		<>
			<Navbar />
			{ user ? 
				<h3>Edit Profile</h3>
			  	:
			  	<h3>You need to login to update your profile</h3>
			}
		</>
	)
}

export default EditProfile;
