// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBklsQKUVztmyK4o0YzG-0gUrrkDNYsqko",
	authDomain: "react-par-la-pratique-2-8b41e.firebaseapp.com",
	projectId: "react-par-la-pratique-2-8b41e",
	storageBucket: "react-par-la-pratique-2-8b41e.appspot.com",
	messagingSenderId: "534248758574",
	appId: "1:534248758574:web:6ad8152bc3d47a59ce6ebf",
	measurementId: "G-J2GBFRJWJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;