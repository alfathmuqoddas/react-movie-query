import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar';
import {Link, useHistory} from 'react-router-dom';
import {getAuth, updateProfile} from "firebase/auth";
import Layout from '../../Layout/Layout';

const EditProfile = () => {
	const user = getAuth().currentUser;
	const [displayName, setDisplayName] = useState('');
	const [avatar, setAvatar] = useState('');
	const history = useHistory();

	const handleEdit = (e) => {
		updateProfile(user, {
		  displayName, 
		  photoURL: avatar
		}).then(() => {
		  history.push('/firebase-app');
		}).catch((error) => {
		  alert('error');
		});
		setDisplayName('');
		setAvatar('');
	}
	
	return (
		<>
			<Navbar />
			<Layout>
			{ user ? 
				<>
				<div className="my-5">
				<h3 className="text-center">Edit Profile</h3>
				<form onSubmit={handleEdit} className="mx-auto my-4 w-100" style={{maxWidth: "500px"}}>
					<label htmlFor="displayName">Edit UserName</label>
					<input type="text" name="displayName" className="form-control mt-2 mb-3" placeholder="edit display name..." value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
					<label htmlFor="avatar">Edit Avatar</label>
					<input type="text" name="avatar" className="form-control my-2" placeholder="add image url" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
					<input type="submit" className="input-group-text btn btn-primary me-3" value="Apply" />
					<Link to="/firebase-app">Edit Later</Link>
				</form>
				</div>
				</>
			  	:
			  	<>
			  	<div className="my-5">
			  	<h3>You need to login to update your profile</h3>
			  	</div>
			  	</>
			}
			</Layout>
		</>
	)
}

export default EditProfile;
