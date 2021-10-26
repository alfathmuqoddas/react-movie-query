import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, doc, getDoc} from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

function Firebase(){
const [user] = useAuthState(auth);

	return (
		<div>
			<h1>Firebase</h1>
			<header></header>
			<section>
				{ user ? <ChatRoom /> : <SignIn />}
			</section>
		</div>
	);
}

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider;
		signInWithPopup(auth, provider);
	}

	return (
		<button onClick={signInWithGoogle}>Sign In With Google</button>
	);
}

function SignOut() {
	return auth.currentUser && (
		<button onClick={() => auth.signOut()}>Sign Out</button>
	)
}

function ChatRoom() {
	const messagesRef = collection(db, 'messages');
	const q = query(messagesRef, orderBy('createdAt'), limit(25));
	const [messages] = useCollectionData(q, {idField: 'id'});

	return (
		<>
			<div>
				{ messages && messages.map((msg, i) => <ChatMessage message={msg} />)}
			</div>
		</>
	);
}

function ChatMessage(props) {
	const { text, uid } = props.message;

	return (
	<p>{text}</p>
	);
}

export default Firebase;

