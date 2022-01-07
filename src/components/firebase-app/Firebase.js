import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, orderBy, query, onSnapshot, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Layout from '../../Layout/Layout';
import Navbar from "../../Layout/Navbar"; 

const firebaseConfig = {
  apiKey: "AIzaSyDLjXox2BBmOp_RRjVaSKfpGA7QFZI_0rQ",
  authDomain: "fir-crud-94681.firebaseapp.com",
  projectId: "fir-crud-94681",
  storageBucket: "fir-crud-94681.appspot.com",
  messagingSenderId: "456468945866",
  appId: "1:456468945866:web:d6954e993d07b4f3aecd33"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

console.log(app);
console.log(db);

const Firebase = () => {

	//this below is adding task
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [sev, setSev] = useState("Low");
	//const [imgArray, setImgArray] = useState("");

	//auth state
	const userAuth = auth.currentUser;

	async function handleSubmit(e) {
		e.preventDefault();
		const { uid } = userAuth;
		//const arr = imgArray.replace(/\s/g, '').match(/.{1,22}/g);
		await addDoc(collection(db, "tasks"), {
			title: title,
			desc: desc,
			sev: sev,
			//array: arr,
			uid,
			IssueID: new Date().valueOf(),
			createdAt: new Date(),
		});
		setTitle("");
		setDesc("");
		//setImgArray("");
	};
	// above is for adding task

	// below is for diplaying task / data from db
	const [tasks, setTasks ] = useState([]);
	useEffect(() => {
		const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
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
	
	const lowBadge = 'badge bg-success';
	const medBadge ='badge bg-warning';
	const hiBadge = 'badge bg-danger';
	
	return (
		<>
			<Navbar />
			<Layout>
			<div className="container">
				{ userAuth ? 
				<div className="my-5">
					<h3 className="text-center mb-3">Add Issue</h3>
					<form onSubmit={handleSubmit} className="mx-auto w-100" style={{maxWidth: "500px"}}>
						<label htmlFor="description">Description</label>
						<input name="description" type="text" className="form-control mb-2" placeholder="enter Issue Description" value={title} onChange={(e) => setTitle(e.target.value)} />
						<label htmlFor="severity">Severity</label>
				          <select
				            className="form-select mb-3"
				            value={sev}
				            onChange={(e) => setSev(e.target.value)}
				            name="severity"
				          >
				            <option value="Low">Low</option>
				            <option value="Medium">Medium</option>
				            <option value="High">High</option>
				          </select>
						<label htmlFor="assigned">Assigned To</label>
						<input name="assigned" type="text" className="form-control mb-2" placeholder="Enter Assigned To" value={desc} onChange={(e) => setDesc(e.target.value)} />
						<input type="submit" className="input-group-text btn btn-primary" value="+" />
					</form>
				</div> 
				: 
				<div className="text-center my-5">
					<h3>Login to Create Issue</h3>
				</div>
				}
				
				<div className="mx-auto mb-5 w-100" style={{maxWidth: "500px"}}>
					{ tasks.map((task) =>(
					<div className="task d-flex justify-content-between align-items-center bg-light rounded p-3 my-3" key={task.id}>
				      <div>
				      	  <p>Issue ID: {task.IssueID}</p>
					      <h4>Description: {task.title}</h4>
					   	  <p className={task.sev === 'Low' ? lowBadge : task.sev === 'Medium' ? medBadge : hiBadge }>{task.sev}</p>
					      <p>Assigned To: {task.desc}</p>
					  </div>
				    </div>
						))}
				</div>
			</div>
		</Layout>
		</>
	)
};

export default Firebase;

