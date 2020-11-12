import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBt24oSe_sPl3lyeJjQQy-_0dVvMgNC1UU",
    authDomain: "rob-firegram.firebaseapp.com",
    databaseURL: "https://rob-firegram.firebaseio.com",
    projectId: "rob-firegram",
    storageBucket: "rob-firegram.appspot.com",
    messagingSenderId: "668919555783",
    appId: "1:668919555783:web:ebb4b06893e02f3bf000e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

// Create a timestamp to order files by using firebase server
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Export services to use in future
export { projectStorage, projectFirestore, timestamp };