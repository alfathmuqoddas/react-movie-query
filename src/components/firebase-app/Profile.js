import React, { useState } from 'react';
import Navbar from '../../Layout/Navbar';
import { Link } from 'react-router-dom';
import { collection, orderBy, query, onSnapshot, doc, deleteDoc, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./Firebase";
import Layout from '../../Layout/Layout';
import { lowBadge, medBadge, hiBadge } from "./Firebase";

const Profile = () => {
	const user = getAuth().currentUser;

	//belw to delete task
	const handleDelete = async (id) => {
		await deleteDoc(doc(db, "tasks", id));
	};
	//above to delete task
	const [tasks, setTasks ] = useState([]);

	onAuthStateChanged(auth, (user) => {
	  if (user) {
    	// below is for diplaying task / data from db
		const q = query(collection(db, "tasks"), where("uid", "==", user.uid), orderBy("createdAt", "desc"));
		const unsub = onSnapshot(q, (querySnapshot) => {
			let taskArray = [];
			querySnapshot.forEach((doc) => {
				taskArray.push({...doc.data(), id: doc.id});
			});
			setTasks(taskArray);
		});
		return () => unsub();
		// above is for diplaying task / data from db
	  } else {
	    // User is signed out
	    // ...
	  }
	});
	
	return (
		<>
			<Navbar />
			<Layout>
			{ user ? 
				<>
					<div className="my-5">
						<h3 className="text-center">User Profile</h3>
						<p>{user.displayName}</p>
						<p>{user.photoURL}</p>
						<p>{user.email}</p>
						<Link to="/firebase-app/edit-profile"><button className="btn btn-primary text-light">Edit Profile</button></Link>
					</div>
					<div className="mx-auto mb-5 w-100" style={{maxWidth: "500px"}}>
						{ tasks.map((task) =>(
						<div className="task shadowHover shadow-sm rounded-3 p-2 my-3" key={task.id}>
					      <div>
					      	  <p>Issue ID: {task.IssueID}</p>
						      <h4>Description: {task.title}</h4>
						   	  <p className={task.sev === 'Low' ? lowBadge : task.sev === 'Medium' ? medBadge : hiBadge }>{task.sev}</p>
						      <p>Assigned To: {task.desc}</p>
					          <button onClick={() => handleDelete(task.id)} className="btn btn-sm btn-danger">&#128465; Delete</button>
					      </div>
					    </div>
						))}
					</div>
				</>
			  	:
			  	<>
				  	<div className="my-5">
				  		<h3>You need to login to see your profile</h3>
				  	</div>
			  	</>
			}
			</Layout>
		</>
	)
}

export default Profile;
