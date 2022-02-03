import app from './config-firebase';
import { 
	getAuth, 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signOut, 
} from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';


const auth = getAuth(app);

export const signup = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);

		return userCredential.user;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;		

		return errorMessage;
	}
}


export const signin = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);

		return userCredential.user;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return errorMessage;		
	}
}

export const signout = async () => {
	try {
		const success = await signOut(auth);

		return success;
	} catch (error) {

		return error;
	}
}