import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCbgE-2iS32wKCmoA7MaoBLQrbq4ULTeGE",
  authDomain: "journal-app-a819b.firebaseapp.com",
  projectId: "journal-app-a819b",
  storageBucket: "journal-app-a819b.appspot.com",
  messagingSenderId: "1059410549547",
  appId: "1:1059410549547:web:127dd365dca17d2da1436e",
  measurementId: "G-JYHQWZ7776"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}