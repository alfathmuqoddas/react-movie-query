import React from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from './Firebase'
//import Layout from '../../Layout/Layout'

const firebaseApp = () => {

	// try {
	//   const docRef = addDoc(collection(db, "react"), {
	//     first: "Ada",
	//     last: "Lovelace",
	//     born: 1815
	//   });
	//   console.log("Document written with ID: ", docRef.id);
	// } catch (e) {
	//   console.error("Error adding document: ", e);
	// };

	return (
		<div>
			<div className="bg-success py-2 text-light">
				<div className="container">
					<h1>Firebase App</h1>
				</div>
			</div>
		</div>
	)
}

export default firebaseApp;