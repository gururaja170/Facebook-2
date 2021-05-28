import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAK10LsbSDF0azAjszvdMuJ3UciOXoP5cs",
	authDomain: "facebook-2-b13cd.firebaseapp.com",
	projectId: "facebook-2-b13cd",
	storageBucket: "facebook-2-b13cd.appspot.com",
	messagingSenderId: "183034309727",
	appId: "1:183034309727:web:6c75c087b51766783d3fea",
};

const app = firebase.apps.length
	? firebase.app()
	: firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
