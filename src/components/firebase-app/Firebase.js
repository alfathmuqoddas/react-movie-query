import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
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
	//const [imgArray, setImgArray] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		//const arr = imgArray.replace(/\s/g, '').match(/.{1,22}/g);
		await addDoc(collection(db, "tasks"), {
			title: title,
			desc: desc,
			//array: arr,
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
		const q = query(collection(db, "tasks"));
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
	// const toggleComplete = async (task) => {
	// 	await updateDoc(doc(db, "tasks", task.id), { completed: !task.completed });
	// };

	const handleDelete = async (id) => {
		await deleteDoc(doc(db, "tasks", id));
	};

	//auth state
	const user = auth.currentUser

	return (
		<>
			<Navbar />
			<Layout>
			<div className="container">
				{ user ? 
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
				      { user ? 
				      	<button onClick={() => handleDelete(task.id)} className="btn btn-danger rounded">&#128465;</button>
				      	:
				      	<div></div>
				      }
				    </div>
						))}
				</div>
			</div>
		</Layout>
		</>
	)
};

// function Firebase(){
// const [user] = useAuthState(auth);

// 	return (
// 		<div>
// 			<h1>Firebase</h1>
// 			<header></header>
// 			<section>
// 				{ user ? <ChatRoom /> : <SignIn />}
// 			</section>
// 		</div>
// 	);
// }

// function SignIn() {
// 	const signInWithGoogle = () => {
// 		const provider = new GoogleAuthProvider;
// 		signInWithPopup(auth, provider);
// 	}

// 	return (
// 		<button onClick={signInWithGoogle}>Sign In With Google</button>
// 	);
// }

// function SignOut() {
// 	return auth.currentUser && (
// 		<button onClick={() => auth.signOut()}>Sign Out</button>
// 	)
// }

// function ChatRoom() {
// 	const messagesRef = collection(db, 'messages');
// 	const q = query(messagesRef, orderBy('createdAt'), limit(25));
// 	const [messages] = useCollectionData(q, {idField: 'id'});

// 	return (
// 		<>
// 			<div>
// 				{ messages && messages.map((msg, i) => <ChatMessage message={msg} />)}
// 			</div>
// 		</>
// 	);
// }

// function ChatMessage(props) {
// 	const { text, uid } = props.message;

// 	return (
// 	<p>{text}</p>
// 	);
// }

export default Firebase;

