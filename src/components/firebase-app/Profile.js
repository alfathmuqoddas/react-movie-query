import React, { useState, useEffect } from 'react';
import Navbar from '../../Layout/Navbar';
import {Link, useHistory} from 'react-router-dom';
import { collection, orderBy, query, onSnapshot, doc, deleteDoc, getDocs, where } from 'firebase/firestore';
import {getAuth, updateProfile} from "firebase/auth";
import {db} from "./Firebase";
import Layout from '../../Layout/Layout';

const Profile = () => {
	const user = getAuth().currentUser;

	//belw to delete task
	const handleDelete = async (id) => {
		await deleteDoc(doc(db, "tasks", id));
	};
	//above to delete task

	// below is for diplaying task / data from db
	const [tasks, setTasks ] = useState([]);
	useEffect(() => {
		const q = query(collection(db, "tasks"), where("uid", "==", user.uid), orderBy("createdAt", "desc"));
		const unsub = onSnapshot(q, (querySnapshot) => {
			let taskArray = [];
			querySnapshot.forEach((doc) => {
				taskArray.push({...doc.data(), id: doc.id});
			});
			setTasks(taskArray);
		});
		return () => unsub();
	}, []);
	// above is for diplaying task / data from db
	
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
				</div>
				<div className="mx-auto mb-5" style={{width: "500px"}}>
					{ tasks.map((task) =>(
					<div className="task d-flex shadowHover justify-content-between align-items-center shadow-sm rounded-3 p-2 my-3" key={task.id}>
				      <div>
					      <h4>{task.title}</h4>
					      <p>{task.desc}</p>
					  </div>
				      <button onClick={() => handleDelete(task.id)} className="btn btn-danger rounded">&#128465;</button>
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
