import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: 'tavrida-selection-tool.appspot.com',
	messagingSenderId: '159482514049',
	appId: '1:159482514049:web:bb56ab1f76f942369c9b80',
	measurementId: 'G-21HTSSZ86C',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	login_hint: 'user@example.com',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
