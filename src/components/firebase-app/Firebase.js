import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
			//array: arr,
			uid,
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

	return (
		<>
			<Navbar />
			<Layout>
			<div className="container">
				{ userAuth ? 
				<div className="my-5">
					<h3 className="text-center mb-3">Add Task</h3>
					<form onSubmit={handleSubmit} className="mx-auto" style={{width: "500px"}}>
						<input type="text" className="form-control mb-2" placeholder="enter title.." value={title} onChange={(e) => setTitle(e.target.value)} />
						<input type="text" className="form-control mb-2" placeholder="enter description.." value={desc} onChange={(e) => setDesc(e.target.value)} />
						<input type="submit" className="input-group-text btn btn-primary" value="+" />
					</form>
				</div> 
				: 
				<div className="text-center my-5">
					<h3>Login to Create Task</h3>
				</div>
				}
				
				<div className="mx-auto mb-5" style={{width: "500px"}}>
					{ tasks.map((task) =>(
					<div className="task d-flex shadowHover justify-content-between align-items-center shadow-sm rounded-3 p-2 my-3" key={task.id}>
				      <div>
					      <h4>{task.title}</h4>
					      <p>{task.desc}</p>
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

