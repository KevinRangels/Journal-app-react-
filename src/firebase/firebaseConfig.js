import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCpM3j4AsK1C7ziWknN7j-gL20ja8w7Wzk",
    authDomain: "react-app-cursos-af133.firebaseapp.com",
    projectId: "react-app-cursos-af133",
    storageBucket: "react-app-cursos-af133.appspot.com",
    messagingSenderId: "813461102950",
    appId: "1:813461102950:web:17ea1c28d11d2ff57428a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}