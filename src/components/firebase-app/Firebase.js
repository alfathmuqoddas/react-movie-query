import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

	// const toggleComplete = async (task) => {
	// 	await updateDoc(doc(db, "tasks", task.id), { completed: !task.completed });
	// };

	const handleDelete = async (id) => {
		await deleteDoc(doc(db, "tasks", id));
	};

	//this below is adding task
	const [title, setTitle] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		await addDoc(collection(db, "tasks"), {
			title,
			createdAt: new Date(),
		});
		setTitle("");
	};

	return (
		<div className="container">
			<div className="my-5">
				<h3 className="text-center">Add Task</h3>
				<form onSubmit={handleSubmit} class="input-group mx-auto" style={{width: "500px"}}>
					<input type="text" className="form-control" placeholder="enter task.." value={title} onChange={(e) => setTitle(e.target.value)} />
					<input type="submit" className="input-group-text btn btn-primary" value="add task" />
				</form>
			</div>
			<div>
				{ tasks.map((task) =>(
				<div className="task d-flex" key={task.id}>
					<p
			        // style={{ textDecoration: task.completed && "line-through" }}
			        // onClick={() => toggleComplete(task)}
			      >
			        {task.title}
			      </p>

			      <button onClick={() => handleDelete(task.id)}>X</button>
			    </div>
					))}
			</div>
		</div>
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

