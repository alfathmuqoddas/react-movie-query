import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJeLihLSDhdtP7oYdkffhW2GtCWChRLog",
  authDomain: "fir-project-66397.firebaseapp.com",
  projectId: "fir-project-66397",
  storageBucket: "fir-project-66397.appspot.com",
  messagingSenderId: "1075650924441",
  appId: "1:1075650924441:web:9b5fee3e099815f5294d08",
  measurementId: "G-QR9XXQSXDN"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
console.log(app);
console.log(db);